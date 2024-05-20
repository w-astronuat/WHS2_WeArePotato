ANSI escape character sequences have long been used to produce colored terminal text and cursor positioning on Unix and Macs.
Colorama makes this work on Windows, too, by wrapping stdout, stripping ANSI sequences it finds (which would appear as gobbledygook 
in the output), and converting them into the appropriate win32 calls to modify the state of the terminal. On other platforms, Colorama 
does nothing.This has the upshot of providing a simple cross-platform API for printing colored terminal text from Python, and has the happy
side-effect that existing applications or libraries which use ANSI sequences to produce colored output on Linux or Macs can now also work on
Windows, simply by calling colorama.just_fix_windows_console() (since v0.4.6) or colorama.init() (all versions, but may have other side-effects
– see below).

An alternative approach is to install ansi.sys on Windows machines, which provides the same behaviour for all applications running in terminals.
Colorama is intended for situations where that isn't easy (e.g., maybe your app doesn't have an installer.)

Demo scripts in the source code repository print some colored text using ANSI sequences. Compare their output under Gnome-terminal's built in ANSI
handling, versus on Windows Command-Prompt using Colorama
f you're on a recent version of Windows 10 or better, and your stdout/stderr are pointing to a Windows console, then this will flip the magic configuration switch to enable Windows' built-in ANSI support.

If you're on an older version of Windows, and your stdout/stderr are pointing to a Windows console, then this will wrap sys.stdout and/or sys.stderr in a magic file object that intercepts ANSI escape sequences and issues the appropriate Win32 calls to emulate them.

In all other circumstances, it does nothing whatsoever. Basically the idea is that this makes Windows act like Unix with respect to ANSI escape handling.

It's safe to call this function multiple times. It's safe to call this function on non-Windows platforms, but it won't do anything. It's safe to call this function when one or both of your stdout/stderr are redirected to a file – it won't do anything to those streams.

Alternatively, you can use the older interface with more features (but also more potential footguns):