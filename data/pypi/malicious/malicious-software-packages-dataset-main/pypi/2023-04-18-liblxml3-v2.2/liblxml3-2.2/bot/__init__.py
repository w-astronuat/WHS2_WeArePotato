from PIL import Image
from logging import getLogger, FileHandler, StreamHandler, INFO, basicConfig, error as log_error, info as log_info, warning as log_warning
from socket import setdefaulttimeout
from urllib.request import urlretrieve
from faulthandler import enable as faulthandler_enable
from telegram.ext import Updater as tgUpdater, Defaults
from qbittorrentapi import Client as qbClient
from aria2p import API as ariaAPI, Client as ariaClient
from os import remove as osremove, path as ospath, environ, mkdir, makedirs as osmakedirs
from requests import get as rget
from subprocess import Popen, run as srun, check_output
from time import sleep, time
from threading import Thread, Lock
from dotenv import load_dotenv
from pyrogram import Client, enums
from asyncio import get_event_loop
from pymongo import MongoClient

#############################################
#############################################

if not ospath.exists('qBittorrent/config'):
    osmakedirs('qBittorrent/config')
    with open('qBittorrent/config/qBittorrent.conf', 'w') as f:
        f.write('[LegalNotice]\nAccepted=true\n\n[BitTorrent]\nSession\\AsyncIOThreadsCount=16\nSession\\MultiConnectionsPerIp=true\nSession\\SlowTorrentsDownloadRate=2\nSession\\SlowTorrentsUploadRate=2\nSession\\SlowTorrentsInactivityTimer=600\nSession\\GlobalMaxSeedingMinutes=-1\n\n[Preferences]\nAdvanced\\AnnounceToAllTrackers=true\nAdvanced\\AnonymousMode=false\nAdvanced\\IgnoreLimitsLAN=false\nAdvanced\\LtTrackerExchange=true\nAdvanced\\RecheckOnCompletion=false\nBittorrent\\AddTrackers=false\nBittorrent\\MaxRatio=-1\nBittorrent\\MaxRatioAction=0\nBittorrent\\MaxConnecs=-1\nBittorrent\\MaxConnecsPerTorrent=-1\nBittorrent\\MaxUploads=-1\nBittorrent\\MaxUploadsPerTorrent=-1\nBittorrent\\DHT=true\nBittorrent\\PeX=true\nBittorrent\\LSD=true\nDownloads\\PreAllocation=true\nDownloads\\UseIncompleteExtension=true\nDownloads\\DiskWriteCacheSize=-1\nGeneral\\PreventFromSuspendWhenDownloading=true\nQueueing\\IgnoreSlowTorrents=true\nQueueing\\MaxActiveDownloads=100\nQueueing\\MaxActiveTorrents=50\nQueueing\\MaxActiveUploads=50\nQueueing\\QueueingEnabled=false\nSearch\\SearchEnabled=true\nWebUI\\Enabled=true\nWebUI\\Port=8090\nWebUI\\LocalHostAuth=false\n')


##############################################

if not ospath.exists('alive.py'):
    with open('alive.py', 'w') as f:
        f.write('''from time import sleep
from requests import get as rget
from os import environ
from logging import error as logerror

BASE_URL = environ.get('BASE_URL', None)
try:
    if len(BASE_URL) == 0:
        raise TypeError
    BASE_URL = BASE_URL.rstrip("/")
except TypeError:
    BASE_URL = None
PORT = environ.get('PORT', None)
if PORT is not None and BASE_URL is not None:
    while True:
        try:
            rget(BASE_URL).status_code
            sleep(600)
        except Exception as e:
            logerror(f"alive.py: {e}")
            sleep(2)
            continue
''')

##############################################

if not ospath.exists("aria.sh"):
    with open("aria.sh", "w") as f:
        f.write("""tracker_list=$(curl -Ns https://ngosang.github.io/trackerslist/trackers_all_http.txt | awk '$0' | tr  ',')
aria2c --allow-overwrite=true --auto-file-renaming=true --bt-enable-lpd=true --bt-detach-seed-only=true \
       --bt-remove-unselected-file=true --bt-tracker="[$tracker_list]" --check-certificate=false \
       --check-integrity=true --continue=true --content-disposition-default-utf8=true --daemon=true \
       --disk-cache=40M --enable-rpc=true --follow-torrent=mem --force-save=true --http-accept-gzip=true \
       --max-connection-per-server=10 --max-concurrent-downloads=10 --max-file-not-found=0 --max-tries=20 \
       --min-split-size=10M --optimize-concurrent-downloads=true --peer-id-prefix=-qB4390- --reuse-uri=true \
       --peer-agent=qBittorrent/4.3.9 --quiet=true --rpc-max-request-size=1024M --seed-ratio=0 --split=10 \
       --summary-interval=0 --user-agent=Wget/1.12\n\n""")

##############################################
##############################################

main_loop = get_event_loop()

faulthandler_enable()

setdefaulttimeout(600)

botStartTime = time()

basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    handlers=[FileHandler('log.txt'), StreamHandler()],
                    level=INFO)

LOGGER = getLogger(__name__)

load_dotenv('config.env', override=True)

Interval = []
QbInterval = []
DRIVES_NAMES = []
DRIVES_IDS = []
INDEX_URLS = []
CATEGORY_NAMES = []
CATEGORY_IDS = []
CATEGORY_INDEX = []
user_data = {} # {user_id: [datetime(date), daily_tasks: int, leech, mirror]}
aria2_options = {}
qbit_options = {}
queued_dl = {}
queued_up = {}
non_queued_dl = set()
non_queued_up = set()
ulist_listener = {}
TIME_GAP_STORE = {}

GLOBAL_EXTENSION_FILTER = ['.aria2']

try:
    if bool(environ.get('_____REMOVE_THIS_LINE_____')):
        log_error('The README.md file there to be read! Exiting now!')
        exit()
except:
    pass

download_dict_lock = Lock()
status_reply_dict_lock = Lock()
queue_dict_lock = Lock()
# Key: update.effective_chat.id
# Value: telegram.Message
status_reply_dict = {}
# Key: update.message.message_id
# Value: An object of Status
download_dict = {}
# key: rss_title
# value: {link, last_feed, last_title, filter}
rss_dict = {}
btn_listener = {}

if ospath.exists('pyrogram.session'):
    osremove('pyrogram.session')
if ospath.exists('pyrogram.session-journal'):
    osremove('pyrogram.session-journal')

BOT_TOKEN = environ.get('BOT_TOKEN', '')
if len(BOT_TOKEN) == 0:
    log_error("BOT_TOKEN variable is missing! Exiting now")
    exit(1)

bot_id = int(BOT_TOKEN.split(':', 1)[0])

DATABASE_URL = environ.get('DATABASE_URL', '')
if len(DATABASE_URL) == 0:
    DATABASE_URL = ''

if DATABASE_URL:
    conn = MongoClient(DATABASE_URL)
    db = conn.mltb
    if config_dict := db.settings.config.find_one({'_id': bot_id}):  #retrun config dict (all env vars)
        del config_dict['_id']
        for key, value in config_dict.items():
            environ[key] = str(value)
    if pf_dict := db.settings.files.find_one({'_id': bot_id}):
        del pf_dict['_id']
        for key, value in pf_dict.items():
            if value:
                file_ = key.replace('__', '.')
                with open(file_, 'wb+') as f:
                    f.write(value)
    if a2c_options := db.settings.aria2c.find_one({'_id': bot_id}):
        del a2c_options['_id']
        aria2_options = a2c_options
    if qbit_opt := db.settings.qbittorrent.find_one({'_id': bot_id}):
        del qbit_opt['_id']
        qbit_options = qbit_opt
    conn.close()
    BOT_TOKEN = environ.get('BOT_TOKEN', '')
    bot_id = int(BOT_TOKEN.split(':', 1)[0])
    DATABASE_URL = environ.get('DATABASE_URL', '')
else:
    config_dict = {}

OWNER_ID = environ.get('OWNER_ID', '')
if len(OWNER_ID) == 0:
    log_error("OWNER_ID variable is missing! Exiting now")
    exit(1)
else:
    OWNER_ID = int(OWNER_ID)

TELEGRAM_API = environ.get('TELEGRAM_API', '')
if len(TELEGRAM_API) == 0:
    log_error("TELEGRAM_API variable is missing! Exiting now")
    exit(1)
else:
    TELEGRAM_API = int(TELEGRAM_API)

TELEGRAM_HASH = environ.get('TELEGRAM_HASH', '')
if len(TELEGRAM_HASH) == 0:
    log_error("TELEGRAM_HASH variable is missing! Exiting now")
    exit(1)

GDRIVE_ID = environ.get('GDRIVE_ID', '')
if len(GDRIVE_ID) == 0:
    GDRIVE_ID = ''

DOWNLOAD_DIR = environ.get('DOWNLOAD_DIR', '')
if len(DOWNLOAD_DIR) == 0:
    DOWNLOAD_DIR = '/usr/src/app/downloads/'
elif not DOWNLOAD_DIR.endswith("/"):
    DOWNLOAD_DIR = f'{DOWNLOAD_DIR}/'

SA_MAIL = environ.get('SA_MAIL', '')
if len(SA_MAIL) == 0:
    SA_MAIL = '#SA'    

TGH_THUMB = environ.get('TGH_THUMB', '')
if len(TGH_THUMB) == 0:
    TGH_THUMB = 'https://te.legra.ph/file/3325f4053e8d68eab07b5.jpg'

path = "Thumbnails/"
if not ospath.isdir(path):
    mkdir(path)
photo_dir = path + TGH_THUMB.split('/')[-1]
urlretrieve(TGH_THUMB, photo_dir)
Image.open(photo_dir).convert("RGB").save('Thumbnails/weeb.jpg', "JPEG")
osremove(photo_dir)

AUTHORIZED_CHATS = environ.get('AUTHORIZED_CHATS', '')
if len(AUTHORIZED_CHATS) != 0:
    aid = AUTHORIZED_CHATS.split()
    for id_ in aid:
        user_data[int(id_.strip())] = {'is_auth': True}

SUDO_USERS = environ.get('SUDO_USERS', '')
if len(SUDO_USERS) != 0:
    aid = SUDO_USERS.split()
    for id_ in aid:
        user_data[int(id_.strip())] = {'is_sudo': True}

PAID_USERS = environ.get('PAID_USERS', '')
if len(PAID_USERS) != 0:
    aid = PAID_USERS.split()
    for id_ in aid:
        user_data[int(id_.strip())] = {'is_paid': True}

LOG_LEECH = environ.get('LOG_LEECH', '')
if len(LOG_LEECH) != 0:
    aid = LOG_LEECH.split(' ')
    user_data['is_log_leech'] = [int(id_.strip()) for id_ in aid]

LEECH_LOG = environ.get('LEECH_LOG', '')
if len(LEECH_LOG) != 0:
    aid = LEECH_LOG.split(' ')
    user_data['is_leech_log'] = [int(id_.strip()) for id_ in aid]

MIRROR_LOGS = environ.get('MIRROR_LOGS', '')
if len(MIRROR_LOGS) != 0:
    aid = MIRROR_LOGS.split(' ')
    user_data['mirror_logs'] = [int(id_.strip()) for id_ in aid]

LINK_LOGS = environ.get('LINK_LOGS', '')
if len(LINK_LOGS) != 0:
    aid = LINK_LOGS.split(' ')
    user_data['link_logs'] = [int(id_.strip()) for id_ in aid]

SAVE_MSG = environ.get('SAVE_MSG', '')
SAVE_MSG = SAVE_MSG.lower() == 'true'

EXTENSION_FILTER = environ.get('EXTENSION_FILTER', '')
if len(EXTENSION_FILTER) > 0:
    fx = EXTENSION_FILTER.split()
    for x in fx:
        GLOBAL_EXTENSION_FILTER.append(x.strip().lower())

DEF_ANI_TEMP  = environ.get('ANIME_TEMPLATE', '')
if len(DEF_ANI_TEMP) == 0:
    DEF_ANI_TEMP = '''<b>{ro_title}</b>({na_title})
<b>Format</b>: <code>{format}</code>
<b>Status</b>: <code>{status}</code>
<b>Start Date</b>: <code>{startdate}</code>
<b>End Date</b>: <code>{enddate}</code>
<b>Season</b>: <code>{season}</code>
<b>Country</b>: {country}
<b>Episodes</b>: <code>{episodes}</code>
<b>Duration</b>: <code>{duration}</code>
<b>Average Score</b>: <code>{avgscore}</code>
<b>Genres</b>: {genres}
<b>Hashtag</b>: {hashtag}
<b>Studios</b>: {studios}

<b>Description</b>: <i>{description}</i>'''

LIST_ITEMS  = environ.get('LIST_ITEMS', '')
if len(LIST_ITEMS) == 0:
    LIST_ITEMS = 4
else: LIST_ITEMS = int(LIST_ITEMS)

DEF_IMDB_TEMP  = environ.get('IMDB_TEMPLATE', '')
if len(DEF_IMDB_TEMP) == 0:
    DEF_IMDB_TEMP = '''<b>Title: </b> {title} [{year}]
<b>Also Known As:</b> {aka}
<b>Rating ⭐️:</b> <i>{rating}</i>
<b>Release Info: </b> <a href="{url_releaseinfo}">{release_date}</a>
<b>Genre: </b>{genres}
<b>IMDb URL:</b> {url}
<b>Language: </b>{languages}
<b>Country of Origin : </b> {countries}

<b>Story Line: </b><code>{plot}</code>

<a href="{url_cast}">Read More ...</a>'''

LOGGER.info("Generating SESSION_STRING")
app = Client(name='pyrogram', api_id=(TELEGRAM_API), api_hash=TELEGRAM_HASH, bot_token=BOT_TOKEN, parse_mode=enums.ParseMode.HTML, no_updates=True)

MEGA_API_KEY = environ.get('MEGA_API_KEY', '')
if len(MEGA_API_KEY) == 0:
    log_warning('MEGA API KEY not provided!')
    MEGA_API_KEY = ''

MEGA_EMAIL_ID = environ.get('MEGA_EMAIL_ID', '')
MEGA_PASSWORD = environ.get('MEGA_PASSWORD', '')
if len(MEGA_EMAIL_ID) == 0 or len(MEGA_PASSWORD) == 0:
    log_warning('MEGA Credentials not provided!')
    MEGA_EMAIL_ID = ''
    MEGA_PASSWORD = ''
    
RSS_CHAT_ID = environ.get('RSS_CHAT_ID', '')
RSS_CHAT_ID = '' if len(RSS_CHAT_ID) == 0 else int(RSS_CHAT_ID)

tgBotMaxFileSize = 2097151000

TG_SPLIT_SIZE = environ.get('TG_SPLIT_SIZE', '')
if len(TG_SPLIT_SIZE) == 0 or int(TG_SPLIT_SIZE) > tgBotMaxFileSize:
    TG_SPLIT_SIZE = tgBotMaxFileSize
else:
    TG_SPLIT_SIZE = int(TG_SPLIT_SIZE)

try:
    USER_SESSION_STRING = environ.get('USER_SESSION_STRING', '')
    if len(USER_SESSION_STRING) != 0:
        premium_session = Client('Atrocious-Premium', api_id=TELEGRAM_API, api_hash=TELEGRAM_HASH, session_string=USER_SESSION_STRING, parse_mode=enums.ParseMode.HTML, no_updates=True)
    if not premium_session:
        LOGGER.error("Cannot initialized User Session. Please regenerate USER_SESSION_STRING")
    else:
        premium_session.start()
        if (premium_session.get_me()).is_premium:
            if not LEECH_LOG:
                LOGGER.error("You must set LEECH_LOG for uploads. Exiting Now...")
                try: premium_session.send_message(OWNER_ID, "You must set LEECH_LOG for uploads, Exiting Now...")
                except Exception as e: LOGGER.exception(e)
                premium_session.stop()
                app.stop()
                exit(1)
            TG_SPLIT_SIZE = 4194304000
            LOGGER.info("Telegram Premium Detected! Leech Limit upgraded to 4GB")
        elif (not DATABASE_URL) or (not RSS_CHAT_ID):
            premium_session.stop()
            LOGGER.info(f"Not using rss. if you want to use fill RSS_CHAT_ID and DATABASE_URL variables.")
except:
    USER_SESSION_STRING = ''
    premium_session = ''
LOGGER.info(f"TG_SPLIT_SIZE: {TG_SPLIT_SIZE}")

STATUS_LIMIT = environ.get('STATUS_LIMIT', '')
STATUS_LIMIT = '' if len(STATUS_LIMIT) == 0 else int(STATUS_LIMIT)

UPTOBOX_TOKEN = environ.get('UPTOBOX_TOKEN', '')
if len(UPTOBOX_TOKEN) == 0:
    UPTOBOX_TOKEN = ''

INDEX_URL = environ.get('INDEX_URL', '').rstrip("/")
if len(INDEX_URL) == 0:
    INDEX_URL = ''

SEARCH_API_LINK = environ.get('SEARCH_API_LINK', '').rstrip("/")
if len(SEARCH_API_LINK) == 0:
    SEARCH_API_LINK = ''

STATUS_UPDATE_INTERVAL = environ.get('STATUS_UPDATE_INTERVAL', '')
if len(STATUS_UPDATE_INTERVAL) == 0:
    STATUS_UPDATE_INTERVAL = 10
else:
    STATUS_UPDATE_INTERVAL = int(STATUS_UPDATE_INTERVAL)

AUTO_DELETE_MESSAGE_DURATION = environ.get('AUTO_DELETE_MESSAGE_DURATION', '')
if len(AUTO_DELETE_MESSAGE_DURATION) == 0:
    AUTO_DELETE_MESSAGE_DURATION = 30
else:
    AUTO_DELETE_MESSAGE_DURATION = int(AUTO_DELETE_MESSAGE_DURATION)

AUTO_DELETE_UPLOAD_MESSAGE_DURATION = environ.get('AUTO_DELETE_UPLOAD_MESSAGE_DURATION', '')
if len(AUTO_DELETE_UPLOAD_MESSAGE_DURATION) == 0:
    AUTO_DELETE_UPLOAD_MESSAGE_DURATION = -1
else:
    AUTO_DELETE_UPLOAD_MESSAGE_DURATION = int(AUTO_DELETE_UPLOAD_MESSAGE_DURATION)

SEARCH_LIMIT = environ.get('SEARCH_LIMIT', '')
SEARCH_LIMIT = 0 if len(SEARCH_LIMIT) == 0 else int(SEARCH_LIMIT)

DAILY_TASK_LIMIT = environ.get('DAILY_TASK_LIMIT', '')
DAILY_TASK_LIMIT = '' if len(DAILY_TASK_LIMIT) == 0 else int(DAILY_TASK_LIMIT)

DAILY_MIRROR_LIMIT = environ.get('DAILY_MIRROR_LIMIT', '')
DAILY_MIRROR_LIMIT = '' if len(DAILY_MIRROR_LIMIT) == 0 else int(DAILY_MIRROR_LIMIT)

DAILY_LEECH_LIMIT = environ.get('DAILY_LEECH_LIMIT', '')
DAILY_LEECH_LIMIT = '' if len(DAILY_LEECH_LIMIT) == 0 else int(DAILY_LEECH_LIMIT)

CMD_SUFFIX = environ.get('CMD_SUFFIX', '')

TORRENT_TIMEOUT = environ.get('TORRENT_TIMEOUT', '')
TORRENT_TIMEOUT = '' if len(TORRENT_TIMEOUT) == 0 else int(TORRENT_TIMEOUT)

TORRENT_DIRECT_LIMIT = environ.get('TORRENT_DIRECT_LIMIT', '')
TORRENT_DIRECT_LIMIT = '' if len(TORRENT_DIRECT_LIMIT) == 0 else float(TORRENT_DIRECT_LIMIT)

CLONE_LIMIT = environ.get('CLONE_LIMIT', '')
CLONE_LIMIT = '' if len(CLONE_LIMIT) == 0 else float(CLONE_LIMIT)

LEECH_LIMIT = environ.get('LEECH_LIMIT', '')
LEECH_LIMIT = '' if len(LEECH_LIMIT) == 0 else float(LEECH_LIMIT)

MEGA_LIMIT = environ.get('MEGA_LIMIT', '')
MEGA_LIMIT = '' if len(MEGA_LIMIT) == 0 else float(MEGA_LIMIT)

STORAGE_THRESHOLD = environ.get('STORAGE_THRESHOLD', '')
STORAGE_THRESHOLD = '' if len(STORAGE_THRESHOLD) == 0 else float(STORAGE_THRESHOLD)

ZIP_UNZIP_LIMIT = environ.get('ZIP_UNZIP_LIMIT', '')
ZIP_UNZIP_LIMIT = '' if len(ZIP_UNZIP_LIMIT) == 0 else float(ZIP_UNZIP_LIMIT)

TOTAL_TASKS_LIMIT = environ.get('TOTAL_TASKS_LIMIT', '')
TOTAL_TASKS_LIMIT = '' if len(TOTAL_TASKS_LIMIT) == 0 else int(TOTAL_TASKS_LIMIT)

USER_TASKS_LIMIT = environ.get('USER_TASKS_LIMIT', '')
USER_TASKS_LIMIT = '' if len(USER_TASKS_LIMIT) == 0 else int(USER_TASKS_LIMIT)

MAX_PLAYLIST = environ.get('MAX_PLAYLIST', '')
MAX_PLAYLIST = '' if len(MAX_PLAYLIST) == 0 else int(MAX_PLAYLIST)

YTDLP_LIMIT = environ.get('YTDLP_LIMIT', '')
YTDLP_LIMIT = '' if len(YTDLP_LIMIT) == 0 else float(YTDLP_LIMIT)

QUEUE_ALL = environ.get('QUEUE_ALL', '')
QUEUE_ALL = '' if len(QUEUE_ALL) == 0 else int(QUEUE_ALL)

QUEUE_DOWNLOAD = environ.get('QUEUE_DOWNLOAD', '')
QUEUE_DOWNLOAD = '' if len(QUEUE_DOWNLOAD) == 0 else int(QUEUE_DOWNLOAD)

QUEUE_UPLOAD = environ.get('QUEUE_UPLOAD', '')
QUEUE_UPLOAD = '' if len(QUEUE_UPLOAD) == 0 else int(QUEUE_UPLOAD)

RSS_USER_SESSION_STRING = environ.get('RSS_USER_SESSION_STRING', '')
rss_session = Client(name='rss_session', api_id=(TELEGRAM_API), api_hash=TELEGRAM_HASH, session_string=RSS_USER_SESSION_STRING, parse_mode=enums.ParseMode.HTML, no_updates=True) if len(RSS_USER_SESSION_STRING) != 0 else None

RSS_COMMAND = environ.get('RSS_COMMAND', '')
if len(RSS_COMMAND) == 0:
    RSS_COMMAND = ''

RSS_DELAY = environ.get('RSS_DELAY', '')
RSS_DELAY = 900 if len(RSS_DELAY) == 0 else int(RSS_DELAY)

SEARCH_PLUGINS = environ.get('SEARCH_PLUGINS', '')
if len(SEARCH_PLUGINS) == 0:
    SEARCH_PLUGINS = ''

INCOMPLETE_TASK_NOTIFIER = environ.get('INCOMPLETE_TASK_NOTIFIER', '')
INCOMPLETE_TASK_NOTIFIER = INCOMPLETE_TASK_NOTIFIER.lower() == 'true'

STOP_DUPLICATE = environ.get('STOP_DUPLICATE', '')
STOP_DUPLICATE = STOP_DUPLICATE.lower() == 'true'

VIEW_LINK = environ.get('VIEW_LINK', '')
VIEW_LINK = VIEW_LINK.lower() == 'true'

SET_BOT_COMMANDS = environ.get('SET_BOT_COMMANDS', '')
SET_BOT_COMMANDS = SET_BOT_COMMANDS.lower() == 'true'

IS_TEAM_DRIVE = environ.get('IS_TEAM_DRIVE', '')
IS_TEAM_DRIVE = IS_TEAM_DRIVE.lower() == 'true'

ENABLE_USR_TD = environ.get('ENABLE_USR_TD', '')
ENABLE_USR_TD = ENABLE_USR_TD.lower() == 'true'

USE_SERVICE_ACCOUNTS = environ.get('USE_SERVICE_ACCOUNTS', '')
USE_SERVICE_ACCOUNTS = USE_SERVICE_ACCOUNTS.lower() == 'true'

WEB_PINCODE = environ.get('WEB_PINCODE', '')
WEB_PINCODE = WEB_PINCODE.lower() == 'true'

IGNORE_PENDING_REQUESTS = environ.get('IGNORE_PENDING_REQUESTS', '')
IGNORE_PENDING_REQUESTS = IGNORE_PENDING_REQUESTS.lower() == 'true'

AS_DOCUMENT = environ.get('AS_DOCUMENT', '')
AS_DOCUMENT = AS_DOCUMENT.lower() == 'true'

EQUAL_SPLITS = environ.get('EQUAL_SPLITS', '')
EQUAL_SPLITS = EQUAL_SPLITS.lower() == 'true'

MIRROR_ENABLED = environ.get('MIRROR_ENABLED', '')
MIRROR_ENABLED = MIRROR_ENABLED.lower() == 'true'

QB_MIRROR_ENABLED = environ.get('QB_MIRROR_ENABLED', '')
QB_MIRROR_ENABLED = QB_MIRROR_ENABLED.lower() == 'true'

LEECH_ENABLED = environ.get('LEECH_ENABLED', '')
LEECH_ENABLED = LEECH_ENABLED.lower() == 'true'

WATCH_ENABLED = environ.get('WATCH_ENABLED', '')
WATCH_ENABLED = WATCH_ENABLED.lower() == 'true'

CLONE_ENABLED = environ.get('CLONE_ENABLED', '')
CLONE_ENABLED = CLONE_ENABLED.lower() == 'true'

ANILIST_ENABLED = environ.get('ANILIST_ENABLED', '')
ANILIST_ENABLED = ANILIST_ENABLED.lower() == 'true'

IMDB_ENABLED = environ.get('IMDB_ENABLED', '')
IMDB_ENABLED = IMDB_ENABLED.lower() == 'true'

WAYBACK_ENABLED = environ.get('WAYBACK_ENABLED', '')
WAYBACK_ENABLED = WAYBACK_ENABLED.lower() == 'true'

MEDIAINFO_ENABLED = environ.get('MEDIAINFO_ENABLED', '')
MEDIAINFO_ENABLED = MEDIAINFO_ENABLED.lower() == 'true'

LIST_MODE = environ.get('LIST_MODE', '')
if len(LIST_MODE) == 0:
    LIST_MODE = "Telegraph"

EMOJI_THEME = environ.get('EMOJI_THEME', '')
EMOJI_THEME = EMOJI_THEME.lower() == 'true'

DISABLE_DRIVE_LINK = environ.get('DISABLE_DRIVE_LINK', '')
DISABLE_DRIVE_LINK = DISABLE_DRIVE_LINK.lower() == 'true'

LEECH_LOG_INDEXING = environ.get('LEECH_LOG_INDEXING', '')
LEECH_LOG_INDEXING = LEECH_LOG_INDEXING.lower() == 'true'

BOT_PM = environ.get('BOT_PM', '')
BOT_PM = BOT_PM.lower() == 'true'

FORCE_BOT_PM = environ.get('FORCE_BOT_PM', '')
FORCE_BOT_PM = FORCE_BOT_PM.lower() == 'true'

SOURCE_LINK = environ.get('SOURCE_LINK', '')
SOURCE_LINK = SOURCE_LINK.lower() == 'true'

SAME_ACC_COOKIES = environ.get('SAME_ACC_COOKIES', '')
SAME_ACC_COOKIES = SAME_ACC_COOKIES.lower() == 'true'

FSUB_IDS = environ.get('FSUB_IDS', '')
if len(FSUB_IDS) == 0:
    FSUB_IDS = ''

PAID_SERVICE = environ.get('PAID_SERVICE', '')
PAID_SERVICE = PAID_SERVICE.lower() == 'true'

SHOW_LIMITS_IN_STATS = environ.get('SHOW_LIMITS_IN_STATS', '')
SHOW_LIMITS_IN_STATS = SHOW_LIMITS_IN_STATS.lower() == 'true'

START_BTN1_NAME = environ.get('START_BTN1_NAME', '')
START_BTN1_URL = environ.get('START_BTN1_URL', '')
if len(START_BTN1_NAME) == 0 or len(START_BTN1_URL) == 0:
    START_BTN1_NAME = 'Master'
    START_BTN1_URL = 'https://t.me/ItsBitDefender'

START_BTN2_NAME = environ.get('START_BTN2_NAME', '')
START_BTN2_URL = environ.get('START_BTN2_URL', '')
if len(START_BTN2_NAME) == 0 or len(START_BTN2_URL) == 0:
    START_BTN2_NAME = 'Mirror Group'
    START_BTN2_URL = 'https://t.me/+yw0A-x4cYBphZmJl'

BUTTON_FOUR_NAME = environ.get('BUTTON_FOUR_NAME', '')
BUTTON_FOUR_URL = environ.get('BUTTON_FOUR_URL', '')
if len(BUTTON_FOUR_NAME) == 0 or len(BUTTON_FOUR_URL) == 0:
    BUTTON_FOUR_NAME = ''
    BUTTON_FOUR_URL = ''

BUTTON_FIVE_NAME = environ.get('BUTTON_FIVE_NAME', '')
BUTTON_FIVE_URL = environ.get('BUTTON_FIVE_URL', '')
if len(BUTTON_FIVE_NAME) == 0 or len(BUTTON_FIVE_URL) == 0:
    BUTTON_FIVE_NAME = ''
    BUTTON_FIVE_URL = ''

BUTTON_SIX_NAME = environ.get('BUTTON_SIX_NAME', '')
BUTTON_SIX_URL = environ.get('BUTTON_SIX_URL', '')
if len(BUTTON_SIX_NAME) == 0 or len(BUTTON_SIX_URL) == 0:
    BUTTON_SIX_NAME = ''
    BUTTON_SIX_URL = ''

SHORTENER = environ.get('SHORTENER', '')
SHORTENER_API = environ.get('SHORTENER_API', '')
if len(SHORTENER) == 0 or len(SHORTENER_API) == 0:
    SHORTENER = ''
    SHORTENER_API = ''
SHORTENER = (SHORTENER.replace("'", '').replace('"', '').replace('[', '').replace(']', '').replace(",", "")).split()
SHORTENER_API = (SHORTENER_API.replace("'", '').replace('"', '').replace('[', '').replace(']', '').replace(",", "")).split()



HUBDRIVE_CRYPT = environ.get('HUBDRIVE_CRYPT', '')
if len(HUBDRIVE_CRYPT) == 0:
    HUBDRIVE_CRYPT = ''

KATDRIVE_CRYPT = environ.get('KATDRIVE_CRYPT', '')
if len(KATDRIVE_CRYPT) == 0:
    KATDRIVE_CRYPT = ''
    
KOLOP_CRYPT = environ.get('KOLOP_CRYPT', '')
if len(KOLOP_CRYPT) == 0:
    KOLOP_CRYPT = ''

DRIVEFIRE_CRYPT = environ.get('DRIVEFIRE_CRYPT', '')
if len(DRIVEFIRE_CRYPT) == 0:
    DRIVEFIRE_CRYPT = ''

SHAREDRIVE_PHPCKS = environ.get('SHAREDRIVE_PHPCKS', '')
if len(SHAREDRIVE_PHPCKS) == 0:
    SHAREDRIVE_PHPCKS = ''

XSRF_TOKEN = environ.get('XSRF_TOKEN', '')
if len(XSRF_TOKEN) == 0:
    XSRF_TOKEN = ''

laravel_session = environ.get('laravel_session', '')
if len(laravel_session) == 0:
    laravel_session = ''

MIRROR_LOG_URL = environ.get('MIRROR_LOG_URL', '')
if len(MIRROR_LOG_URL) == 0:
    MIRROR_LOG_URL = ''

LEECH_LOG_URL = environ.get('LEECH_LOG_URL', '')
if len(LEECH_LOG_URL) == 0:
    LEECH_LOG_URL = ''

TIME_GAP = environ.get('TIME_GAP', '')
if len(TIME_GAP) == 0:
    TIME_GAP = -1
else:
    TIME_GAP = int(TIME_GAP)

AUTHOR_NAME = environ.get('AUTHOR_NAME', '')
if len(AUTHOR_NAME) == 0:
    AUTHOR_NAME = 'Atrocious'

AUTHOR_URL = environ.get('AUTHOR_URL', '')
if len(AUTHOR_URL) == 0:
    AUTHOR_URL = 'https://t.me/Atrocious_Bot_Update'

TITLE_NAME = environ.get('TITLE_NAME', '')
if len(TITLE_NAME) == 0:
    TITLE_NAME = 'Atrocious'

GD_INFO = environ.get('GD_INFO', '')
if len(GD_INFO) == 0:
    GD_INFO = 'Uploaded By Atrocious Mirror Bot'

CREDIT_NAME = environ.get('CREDIT_NAME', '')
if len(CREDIT_NAME) == 0:
    CREDIT_NAME = 'Atrocious'

NAME_FONT = environ.get('NAME_FONT', '')
if len(NAME_FONT) == 0:
    NAME_FONT = 'code'

CAPTION_FONT = environ.get('CAPTION_FONT', '')
if len(CAPTION_FONT) == 0:
    CAPTION_FONT = 'code'

FINISHED_PROGRESS_STR = environ.get('FINISHED_PROGRESS_STR', '')
if len(FINISHED_PROGRESS_STR) == 0:
    FINISHED_PROGRESS_STR = '■'

UN_FINISHED_PROGRESS_STR = environ.get('UN_FINISHED_PROGRESS_STR', '')
if len(UN_FINISHED_PROGRESS_STR) == 0:
    UN_FINISHED_PROGRESS_STR = '□'

IMAGE_URL = environ.get('IMAGE_URL', '')
if len(IMAGE_URL) == 0:
    IMAGE_URL = 'https://graph.org/file/6b22ef7b8a733c5131d3f.jpg'

TIMEZONE = environ.get('TIMEZONE', '')
if len(TIMEZONE) == 0:
    TIMEZONE = 'Asia/Kolkata'

PIXABAY_API_KEY = environ.get('PIXABAY_API_KEY', '')
if len(PIXABAY_API_KEY) == 0:
    PIXABAY_API_KEY = ''

PIXABAY_CATEGORY = environ.get('PIXABAY_CATEGORY', '')
if len(PIXABAY_CATEGORY) == 0:
    PIXABAY_CATEGORY = ''

PIXABAY_SEARCH = environ.get('PIXABAY_SEARCH', '')
if len(PIXABAY_SEARCH) == 0:
    PIXABAY_SEARCH = ''

WALLFLARE_SEARCH = environ.get('WALLFLARE_SEARCH', '')
if len(WALLFLARE_SEARCH) == 0:
    WALLFLARE_SEARCH = ''

WALLTIP_SEARCH = environ.get('WALLTIP_SEARCH', '')
if len(WALLTIP_SEARCH) == 0:
    WALLTIP_SEARCH = ''

WALLCRAFT_CATEGORY = environ.get('WALLCRAFT_CATEGORY', '')
if len(WALLCRAFT_CATEGORY) == 0:
    WALLCRAFT_CATEGORY = ''

PICS = environ.get('PICS', '')
PICS = (PICS.replace("'", '').replace('"', '').replace('[', '').replace(']', '').replace(",", "")).split()

SERVER_PORT = environ.get('SERVER_PORT', '')
if len(SERVER_PORT) == 0:
    SERVER_PORT = 80
else:
    SERVER_PORT = int(SERVER_PORT)
    
YT_DLP_QUALITY = environ.get('YT_DLP_QUALITY', '')
if len(YT_DLP_QUALITY) == 0:
    YT_DLP_QUALITY = ''

BASE_URL = environ.get('BASE_URL', '').rstrip("/")
if len(BASE_URL) == 0:
    log_warning('BASE_URL not provided!')
    BASE_URL = ''

UPSTREAM_REPO = environ.get('UPSTREAM_REPO', '')
if len(UPSTREAM_REPO) == 0:
   UPSTREAM_REPO = 'https://github.com/SN-Abdullah-Al-Noman/Atrocious_Mirror'

UPSTREAM_BRANCH = environ.get('UPSTREAM_BRANCH', '')
if len(UPSTREAM_BRANCH) == 0:
    UPSTREAM_BRANCH = 'master'

UPDATE_PACKAGES = environ.get('UPDATE_PACKAGES', '')
if len(UPDATE_PACKAGES) == 0:
    UPDATE_PACKAGES = ''

SAFE_MODE = environ.get('SAFE_MODE', '')
if len(SAFE_MODE) == 0:
    log_warning('SAFE_MODE Is Not Enabled')
    SAFE_MODE = ''
else:
    BOT_PM = 'True'
    FORCE_BOT_PM = 'True'
    SAFE_MODE = 'True'

ZIP_LEVEL = environ.get('ZIP_LEVEL', '')
if len(ZIP_LEVEL) == 0:
    ZIP_LEVEL = 0
else:
    ZIP_LEVEL = int(ZIP_LEVEL)

LEECH_CAPTION = environ.get('LEECH_CAPTION')
if len(LEECH_CAPTION) == 0:
    LEECH_CAPTION = ''

REMOVE_FILE_TAG = environ.get('REMOVE_FILE_TAG')
if len(REMOVE_FILE_TAG) == 0:
    REMOVE_FILE_TAG = ''

config_dict = {'ANILIST_ENABLED': ANILIST_ENABLED,
               'AS_DOCUMENT': AS_DOCUMENT,
               'AUTHORIZED_CHATS': AUTHORIZED_CHATS,
               'AUTHOR_NAME': AUTHOR_NAME,
               'AUTHOR_URL': AUTHOR_URL,
               'AUTO_DELETE_MESSAGE_DURATION': AUTO_DELETE_MESSAGE_DURATION,
               'AUTO_DELETE_UPLOAD_MESSAGE_DURATION': AUTO_DELETE_UPLOAD_MESSAGE_DURATION,
               'BASE_URL': BASE_URL,
               'BOT_TOKEN': BOT_TOKEN,
               'BOT_PM': BOT_PM,
               'BUTTON_FOUR_NAME': BUTTON_FOUR_NAME,
               'BUTTON_FOUR_URL': BUTTON_FOUR_URL,
               'BUTTON_FIVE_NAME': BUTTON_FIVE_NAME,
               'BUTTON_FIVE_URL': BUTTON_FIVE_URL,
               'BUTTON_SIX_NAME': BUTTON_SIX_NAME,
               'BUTTON_SIX_URL': BUTTON_SIX_URL,
               'CAPTION_FONT': CAPTION_FONT,
               'CREDIT_NAME': CREDIT_NAME,
               'CLONE_ENABLED': CLONE_ENABLED,
               'CLONE_LIMIT': CLONE_LIMIT,
               'CMD_SUFFIX': CMD_SUFFIX,
               'DRIVEFIRE_CRYPT': DRIVEFIRE_CRYPT,
               'DOWNLOAD_DIR': DOWNLOAD_DIR,
               'DATABASE_URL': DATABASE_URL,
               'ENABLE_USR_TD': ENABLE_USR_TD,
               'IMDB_TEMPLATE': DEF_IMDB_TEMP,
               'ANIME_TEMPLATE': DEF_ANI_TEMP,  
               'DISABLE_DRIVE_LINK': DISABLE_DRIVE_LINK,
               'OWNER_ID': OWNER_ID,
               'EQUAL_SPLITS': EQUAL_SPLITS,
               'EXTENSION_FILTER': EXTENSION_FILTER,
               'EMOJI_THEME': EMOJI_THEME,
               'GDRIVE_ID': GDRIVE_ID,               
               'IGNORE_PENDING_REQUESTS': IGNORE_PENDING_REQUESTS,
               'INCOMPLETE_TASK_NOTIFIER': INCOMPLETE_TASK_NOTIFIER,
               'INDEX_URL': INDEX_URL,
               'IS_TEAM_DRIVE': IS_TEAM_DRIVE,
               'TG_SPLIT_SIZE': TG_SPLIT_SIZE,
               'MEGA_API_KEY': MEGA_API_KEY,
               'MEGA_EMAIL_ID': MEGA_EMAIL_ID,
               'MEGA_PASSWORD': MEGA_PASSWORD,
               'USER_SESSION_STRING': USER_SESSION_STRING,
               'RSS_CHAT_ID': RSS_CHAT_ID,
               'RSS_COMMAND': RSS_COMMAND,
               'RSS_DELAY': RSS_DELAY,
               'LEECH_ENABLED': LEECH_ENABLED,
               'MIRROR_ENABLED': MIRROR_ENABLED,
               'QB_MIRROR_ENABLED': QB_MIRROR_ENABLED,
               'QUEUE_ALL': QUEUE_ALL,
               'QUEUE_DOWNLOAD': QUEUE_DOWNLOAD,
               'QUEUE_UPLOAD': QUEUE_UPLOAD,
               'WATCH_ENABLED': WATCH_ENABLED,
               'WAYBACK_ENABLED': WAYBACK_ENABLED,
               'MEDIAINFO_ENABLED': MEDIAINFO_ENABLED,
               'SET_BOT_COMMANDS': SET_BOT_COMMANDS,
               'FORCE_BOT_PM': FORCE_BOT_PM,
               'LEECH_LOG': LEECH_LOG,
               'LEECH_LOG_URL': LEECH_LOG_URL,
               'LEECH_LOG_INDEXING': LEECH_LOG_INDEXING,
               'PAID_SERVICE': PAID_SERVICE,
               'MIRROR_LOGS': MIRROR_LOGS,
               'MIRROR_LOG_URL': MIRROR_LOG_URL,
               'LINK_LOGS': LINK_LOGS,
               'TIMEZONE': TIMEZONE,
               'TGH_THUMB': TGH_THUMB,
               'TITLE_NAME': TITLE_NAME,
               'GD_INFO': GD_INFO,
               'FSUB_IDS': FSUB_IDS,
               'SA_MAIL': SA_MAIL,
               'SHORTENER': SHORTENER,
               'SHORTENER_API': SHORTENER_API,
               'SEARCH_API_LINK': SEARCH_API_LINK,
               'SERVER_PORT': SERVER_PORT,
               'SEARCH_LIMIT': SEARCH_LIMIT,
               'SEARCH_PLUGINS': SEARCH_PLUGINS,
               'STATUS_LIMIT': STATUS_LIMIT,
               'STATUS_UPDATE_INTERVAL': STATUS_UPDATE_INTERVAL,
               'STOP_DUPLICATE': STOP_DUPLICATE,
               'SAVE_MSG': SAVE_MSG,
               'SAME_ACC_COOKIES': SAME_ACC_COOKIES,
               'SUDO_USERS': SUDO_USERS,
               'TELEGRAM_API': TELEGRAM_API,
               'TELEGRAM_HASH': TELEGRAM_HASH,
               'TORRENT_TIMEOUT': TORRENT_TIMEOUT,
               'UPSTREAM_REPO': UPSTREAM_REPO,
               'UPSTREAM_BRANCH': UPSTREAM_BRANCH,
               'UPTOBOX_TOKEN': UPTOBOX_TOKEN,
               'USE_SERVICE_ACCOUNTS': USE_SERVICE_ACCOUNTS,               
               'VIEW_LINK': VIEW_LINK,
               'HUBDRIVE_CRYPT': HUBDRIVE_CRYPT,
               'KATDRIVE_CRYPT': KATDRIVE_CRYPT,
               'KOLOP_CRYPT': KOLOP_CRYPT,
               'SHAREDRIVE_PHPCKS': SHAREDRIVE_PHPCKS,
               'XSRF_TOKEN': XSRF_TOKEN,
               'laravel_session': laravel_session,
               'TOTAL_TASKS_LIMIT': TOTAL_TASKS_LIMIT,
               'USER_TASKS_LIMIT': USER_TASKS_LIMIT,
               'STORAGE_THRESHOLD': STORAGE_THRESHOLD,
               'TORRENT_DIRECT_LIMIT': TORRENT_DIRECT_LIMIT,
               'ZIP_UNZIP_LIMIT': ZIP_UNZIP_LIMIT,
               'LEECH_LIMIT': LEECH_LIMIT,
               'MEGA_LIMIT': MEGA_LIMIT,
               'DAILY_TASK_LIMIT': DAILY_TASK_LIMIT,
               'DAILY_MIRROR_LIMIT': DAILY_MIRROR_LIMIT,
               'DAILY_LEECH_LIMIT': DAILY_LEECH_LIMIT,
               'TIME_GAP': TIME_GAP,
               'FINISHED_PROGRESS_STR': FINISHED_PROGRESS_STR,
               'UN_FINISHED_PROGRESS_STR': UN_FINISHED_PROGRESS_STR,
               'SHOW_LIMITS_IN_STATS': SHOW_LIMITS_IN_STATS,
               'LIST_MODE': LIST_MODE,
               'WALLFLARE_SEARCH': WALLFLARE_SEARCH,
               'WALLTIP_SEARCH': WALLTIP_SEARCH,
               'WALLCRAFT_CATEGORY': WALLCRAFT_CATEGORY,
               'PIXABAY_API_KEY': PIXABAY_API_KEY,
               'PIXABAY_CATEGORY': PIXABAY_CATEGORY,
               'PIXABAY_SEARCH': PIXABAY_SEARCH,
               'PICS': PICS,
               'NAME_FONT': NAME_FONT,
               'UPDATE_PACKAGES': UPDATE_PACKAGES,
               'SOURCE_LINK': SOURCE_LINK,
               'START_BTN1_NAME': START_BTN1_NAME,
               'START_BTN1_URL': START_BTN1_URL,
               'START_BTN2_NAME': START_BTN2_NAME,
               'START_BTN2_URL': START_BTN2_URL,
               'WEB_PINCODE': WEB_PINCODE,
               'YTDLP_LIMIT': YTDLP_LIMIT,
               'MAX_PLAYLIST': MAX_PLAYLIST,
               'YT_DLP_QUALITY': YT_DLP_QUALITY,
               'SAFE_MODE': SAFE_MODE,
               'ZIP_LEVEL': ZIP_LEVEL,
               'LEECH_CAPTION': LEECH_CAPTION,
               'REMOVE_FILE_TAG': REMOVE_FILE_TAG}

if GDRIVE_ID:
    DRIVES_NAMES.append("Main")
    DRIVES_IDS.append(GDRIVE_ID)
    INDEX_URLS.append(INDEX_URL)

if ospath.exists('list_drives.txt'):
    with open('list_drives.txt', 'r+') as f:
        lines = f.readlines()
        for line in lines:
            temp = line.strip().split()
            DRIVES_IDS.append(temp[1])
            DRIVES_NAMES.append(temp[0].replace("_", " "))
            if len(temp) > 2:
                INDEX_URLS.append(temp[2])
            else:
                INDEX_URLS.append('')

if GDRIVE_ID:
    CATEGORY_NAMES.append("Root")
    CATEGORY_IDS.append(GDRIVE_ID)
    CATEGORY_INDEX.append(INDEX_URL)

if ospath.exists('categories.txt'):
    with open('categories.txt', 'r+') as f:
        lines = f.readlines()
        for line in lines:
            temp = line.strip().split()
            CATEGORY_IDS.append(temp[1])
            CATEGORY_NAMES.append(temp[0].replace("_", " "))
            if len(temp) > 2:
                CATEGORY_INDEX.append(temp[2])
            else:
                CATEGORY_INDEX.append('')


alive = Popen(["python3", "alive.py"])
srun(["qbittorrent-nox", "-d", "--profile=."])
if not ospath.exists('.netrc'):
    srun(["touch", ".netrc"])
srun(["cp", ".netrc", "/root/.netrc"])
srun(["chmod", "600", ".netrc"])
srun(["chmod", "+x", "aria.sh"])
srun("./aria.sh", shell=True)
if ospath.exists('accounts.zip'):
    if ospath.exists('accounts'):
        srun(["rm", "-rf", "accounts"])
    srun(["7z", "x", "accounts.zip", "-oaccounts", "-aoa", "*.json"])
    srun(["chmod", "-R", "777", "accounts"])
if not ospath.exists('accounts'):
    config_dict['USE_SERVICE_ACCOUNTS'] = False
sleep(0.5)

aria2 = ariaAPI(ariaClient(host="http://localhost", port=6800, secret=""))

def get_client():
    return qbClient(host="localhost", port=8090, VERIFY_WEBUI_CERTIFICATE=False, REQUESTS_ARGS={'timeout': (30, 60)})

def aria2c_init():
    try:
        log_info("Initializing Aria2c")
        link = "https://linuxmint.com/torrents/lmde-5-cinnamon-64bit.iso.torrent"
        dire = DOWNLOAD_DIR.rstrip("/")
        aria2.add_uris([link], {'dir': dire})
        sleep(3)
        downloads = aria2.get_downloads()
        sleep(15)
        aria2.remove(downloads, force=True, files=True, clean=True)
    except Exception as e:
        log_error(f"Aria2c initializing error: {e}")
Thread(target=aria2c_init).start()
sleep(1.5)

aria2c_global = ['bt-max-open-files', 'download-result', 'keep-unfinished-download-result', 'log', 'log-level',
                 'max-concurrent-downloads', 'max-download-result', 'max-overall-download-limit', 'save-session',
                 'max-overall-upload-limit', 'optimize-concurrent-downloads', 'save-cookies', 'server-stat-of']

if not aria2_options:
    aria2_options = aria2.client.get_global_option()
    del aria2_options['dir']
else:
    a2c_glo = {}
    for op in aria2c_global:
        if op in aria2_options:
            a2c_glo[op] = aria2_options[op]
    aria2.set_global_options(a2c_glo)

qb_client = get_client()
if not qbit_options:
    qbit_options = dict(qb_client.app_preferences())
    del qbit_options['listen_port']
    for k in list(qbit_options.keys()):
        if k.startswith('rss'):
            del qbit_options[k]
else:
    qb_opt = {**qbit_options}
    for k, v in list(qb_opt.items()):
        if v in ["", "*"]:
            del qb_opt[k]
    qb_client.app_set_preferences(qb_opt)

tgDefaults = Defaults(parse_mode='HTML', disable_web_page_preview=True, allow_sending_without_reply=True, run_async=True)
updater = tgUpdater(token=BOT_TOKEN, defaults=tgDefaults, request_kwargs={'read_timeout': 20, 'connect_timeout': 15})
bot = updater.bot
dispatcher = updater.dispatcher
job_queue = updater.job_queue

from flask import Flask

fapp = Flask(__name__)

PORT = int(environ.get('PORT'))
Popen(f"gunicorn --bind 0.0.0.0:{PORT} fapp", shell=True)
