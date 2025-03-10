0.3.9
  * Revert fix for issue #103 which causes problems for dependent applications
0.3.8
  * Fix issue #121: "invalid escape sequence" deprecation fixes on Python 3.6+
  * Fix issue #110: fix "set console title" when working with unicode strings
  * Fix issue #103: enable color when using "input" function on Python 3.5+
  * Fix issue #95: enable color when stderr is a tty but stdout is not
0.3.7
  * Fix issue #84: check if stream has 'closed' attribute before testing it
  * Fix issue #74: objects might become None at exit
0.3.6
  * Fix issue #81: fix ValueError when a closed stream was used
0.3.5
  * Bumping version to re-upload a wheel distribution
0.3.4
  * Fix issue #47 and #80 - stream redirection now strips ANSI codes on Linux
  * Fix issue #53 - strip readline markers
  * Fix issue #32 - assign orig_stdout and orig_stderr when initialising
  * Fix issue #57 - Fore.RESET did not reset style of LIGHT_EX colors.
    Fixed by Andy Neff
  * Fix issue #51 - add context manager syntax. Thanks to Matt Olsen.
  * Fix issue #48 - colorama didn't work on Windows when environment
    variable 'TERM' was set.
  * Fix issue #54 - fix pylint errors in client code.
  * Changes to readme and other improvements by Marc Abramowitz and Zearin
0.3.3
  * Fix Google Code issue #13 - support changing the console title with OSC
    escape sequence
  * Fix Google Code issue #16 - Add support for Windows xterm emulators
  * Fix Google Code issue #30 - implement \033[nK (clear line)
  * Fix Google Code issue #49 - no need to adjust for scroll when new position
    is already relative (CSI n A\B\C\D)
  * Fix Google Code issue #55 - erase_data fails on Python 3.x
  * Fix Google Code issue #46 - win32.COORD definition missing
  * Implement \033[0J and \033[1J (clear screen options)
  * Fix default ANSI parameters
  * Fix position after \033[2J (clear screen)
  * Add command shortcuts: colorama.Cursor, colorama.ansi.set_title,
    colorama.ansi.clear_line, colorama.ansi.clear_screen
  * Fix issue #22 - Importing fails for python3 on Windows
  * Thanks to John Szakmeister for adding support for light colors
  * Thanks to Charles Merriam for adding documentation to demos
0.3.2
  * Thanks to Marc Schlaich (schlamar) for a setup.py fix for Python2.5
  * Thanks to Jurko for fix on 64-bit Windows CPython2.5 w/o ctypes
    (Google Code issue #56)
  * Thanks to Remi Rampin for:
    * better github integration, incl rendered README and Travis config.
    * fixed forward slashes in README
  * Thanks to Florian Bruhin for fix when stdout or stderr are None
  * Thanks to Simeon Visser for:
    * closing a file handle using 'with'
    * updating classifiers to include Python 3.3 and 3.4
  * Thanks to Thomas Weininger for fix ValueError on Windows
    (Google Code issue #50)
0.3.1
  * Fixed crash on exit with closed stdout, with thanks to Marc Abramowitz.
  * Now uses setuptools if available, and falls back to distutils if not.
  * setup.py no longer imports anything from colorama source.
0.3.0
  * Move repository to Git, https://github.com/tartley/colorama. (My Mercurial
    repo seemed to be corrupted, I couldn't commit nor view patches of old
    commits, even on fresh checkouts.)
  * Fix always-crash on non-Windows platforms, reported by Matt McCormick.
  * Fix Google Code issue #47, incompatible with pyreadline.
0.2.7
  * Fix problem under 64-bit windows due to ctypes HANDLE size.
    Submitted by the rather magnificent Ben Hoyt.
    This fixes Google Code issue #43
0.2.6
  * Add copyright & licensing info to every file, as requested by a large
    downstream project which has problems making sure that all 3rd party
    contributions have appropriate license.
0.2.5
  * Severeral documentation & demo fixes.
0.2.4
  * Fix to work on Windows 7.
  * Python 3 compatibility in docs and demos.
  * Add handling for 'cursor up' and 'get position' ANSI codes.
0.2.3
  * Split changelog out into separate file.
0.2.2
  * Fix bug which caused init() to raise, introduced in 0.2.1.
  * Remove asserts which cause problems in various circumstances. At least
    some users saw asserts fail on 'success' returned from win32 functions,
    even though the win32 functions appear to have worked correctly.
0.2.1
  * Completely broken: I added a bug which caused init() to raise.
  * Added some documentation for cursor positioning and clear screen to README.
  * Add 'reinit' and 'deinit' functions, as suggested by Charles FOL and
    Romanov DA.
0.2
  * Merge in changes from Daniel Griffith: Add ANSI cursor positioning &
    partial support for clear screen. Patch submitted by Oscar Lester, don't
    send RESET_ALL to non-tty.
  * Demos split into separate files and moved into their own directory.
  * Tweak sys.path in demos so they run against local source, not installed
    version of Colorama.
0.1.18
  * Fix README (no such attr as Fore.DEFAULT, etc), kindly reported by nodakai.
0.1.17
  * Prevent printing of garbage ANSI codes upon installing with pip
0.1.16
  * Re-upload to fix previous error. Make clean now removes old MANIFEST.
0.1.15
  * Completely broken. Distribution was empty due to leftover invalid MANIFEST
    file from building on a different platform.
  * Fix python3 incompatibility kindly reported by G |uumlaut| nter Kolousek
0.1.14
  * Fix hard-coded reset to white-on-black colors. Fore.RESET, Back.RESET
    and Style.RESET_ALL now revert to the colors as they were when init()
    was called. Some lessons hopefully learned about testing prior to release.
0.1.13
  * Completely broken: barfed when installed using pip.
0.1.12
  * Completely broken: contained no source code. double oops.
0.1.11
  * Completely broken: fatal import errors on Ubuntu. oops.
0.1.10
  * Stop emulating 'bright' text with bright backgrounds.
  * Display 'normal' text using win32 normal foreground instead of bright.
  * Drop support for 'dim' text.
0.1.9
  * Fix incompatibility with Python 2.5 and earlier.
  * Remove setup.py dependency on setuptools, now uses stdlib distutils.
0.1.8
  * Fix ghastly errors all over the place on Ubuntu.
  * Add init kwargs 'convert' and 'strip', which supercede the old 'wrap'.
0.1.7
  * Python 3 compatible.
  * Fix: Now strips ansi on windows without necessarily converting it to
    win32 calls (eg. if output is not a tty.)
  * Fix: Flaky interaction of interleaved ansi sent to stdout and stderr.
  * Improved demo.sh (hg checkout only.)
0.1.6
  * Fix ansi sequences with no params now default to parmlist of [0].
  * Fix flaky behaviour of autoreset and reset_all atexit.
  * Fix stacking of repeated atexit calls - now just called once.
  * Fix ghastly import problems while running tests.
  * 'demo.py' (hg checkout only) now demonstrates autoreset and reset atexit.
  * Provide colorama.VERSION, used by setup.py.
  * Tests defanged so they no longer actually change terminal color when run.
0.1.5
  * Now works on Ubuntu.
0.1.4
  * Implemented RESET_ALL on application exit
0.1.3
  * Implemented init(wrap=False)
0.1.2
  * Implemented init(autoreset=True)
0.1.1
  * Minor tidy
0.1
  * Works on Windows for foreground color, background color, bright or dim


.. |uumlaut| unicode:: U+00FC .. u with umlaut
   :trim:

