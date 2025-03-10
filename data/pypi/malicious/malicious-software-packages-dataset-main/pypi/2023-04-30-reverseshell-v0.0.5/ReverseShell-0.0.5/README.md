![ReverseShell logo](https://mauricelambert.github.io/info/python/code/ReverseShell_small.png "ReverseShell logo")

# ReverseShell

## Description

This package implements an advanced reverse shell console (supports: TCP, UDP, IRC, HTTP and DNS).

 - Support basic reverse shell using netcat or other standard/basic reverse shell
 - Basic terminal features
 - Commands history
 - UDP
 - Multi-sessions TCP (1 session/1 command)
 - Encrypt TCP data with SSL
 - Encrypt commands with RC4
 - Hide commands with IRC protocol
 - Hide commands with DNS (UDP) protocol
 - Hide commands with HTTP protocol
 - Advanced terminal features (required specific packets):
     - Print colored hostname, user and current directory
     - Auto-completion (executables in PATH and files in current directory)
     - Updatable any time you send the specific packet
 - Auto-restart for TCP client
 - Very large TCP packet (greater than TCP Window) is working

You can read multiples POC for reverse shell client written in python in the *clients* directory.

I add public and private key for default SSL certificate, is useful for test but **is not secure, create your own certificate to protect your TCP data**.

## Requirements

This package require :
 - python3
 - python3 Standard Library
 - PythonToolsKit

## Installation

```bash
pip install ReverseShell
```

## Usages

### Command lines

```bash
python3 -m ReverseShell --help
python3 ReverseShell.pyz -h
ReverseShell # To test this command use the shellclientsockettcp.py script. This is a standard/basic reverse shell compatible with netcat.
ReverseShell -u -d # To test this command use the shellclientdns.py script. This is a DNS (UDP) reverse shell.
ReverseShell -H -T # To test this command use the shellclienthttp_advanced.py script. This is an advanced HTTP reverse shell.
ReverseShell -H -T -s # To test this command use the shellclienthttps_advanced.py script. This is an advanced HTTPS reverse shell.
ReverseShell -H -T -s -k "abcd" # To test this command use the "shellclienthttpsencrypt_advanced.py abcd" command. This is an advanced HTTPS encrypted (using RC4 with "abcd" key) reverse shell.
ReverseShell -I # To test this command use the shellclientsocketirc.py script. This is an IRC reverse shell.
ReverseShell -T # To test this command use the shellclienttcp.py script. This is a multi-sessions TCP reverse shell.
ReverseShell -T # To test this command use the shellclienttcp_advanced.py script. This is an advanced multi-sessions TCP reverse shell.
ReverseShell -u # To test this command use the shellclientudp.py script. This is a UDP reverse shell.
```

### Python3

```python
from ReverseShell import ReverseShellSocketTcp, ReverseShell

with ReverseShellSocketTcp(address=("127.0.0.1", 1337), ssl=False, cert=None, key=None, handler=ReverseShell) as shellserver:
    shellserver.serve_forever()

# To test this code you can use the shellclientsockettcp.py script. This is a standard/basic reverse shell compatible with netcat.

from ReverseShell import ReverseShellTcp, HttpReverseShell, partial

with ReverseShellTcp(address=("127.0.0.1", 1337), ssl=True, cert="server.crt", key="server.key", handler=partial(HttpReverseShell, key=b"abcd", encoding="utf-8")) as shellserver:
    shellserver.serve_forever()

# To test this command use the "shellclienthttpsencrypt_advanced.py abcd" command. This is an advanced HTTPS encrypted (using RC4 with "abcd" key) reverse shell.
```

## Links

 - [Github Page](https://github.com/mauricelambert/ReverseShell)
 - [Pypi](https://pypi.org/project/ReverseShell/)
 - [Documentation](https://mauricelambert.github.io/info/python/security/ReverseShell.html)
 - [Executable](https://mauricelambert.github.io/info/python/security/ReverseShell.pyz)

## Help

```text
usage: ReverseShell.py [-h] [--udp | --tcp | --multi-tcp] [--http | --dns | --irc] [--no-color] [--key KEY] [--cert CERT] [--private PRIVATE] [--ip IP]
                       [--port PORT] [--encoding ENCODING] [--ssl]

Reverse Shell with high level feature

options:
  -h, --help            show this help message and exit
  --udp, -u             Use UDP socket.
  --tcp, -t             Use TCP socket.
  --multi-tcp, -T       Create TCP socket for each command and response.
  --http, -H            Use HTTP requests and responses.
  --dns, -d             Use DNS requests and responses.
  --irc, -I             Use IRC requests and responses.
  --no-color, --color, -C
                        Do not use color
  --key KEY, -k KEY     Add a key to encrypt with RC4.
  --cert CERT, -c CERT  SSL cert file.
  --private PRIVATE, -P PRIVATE
                        SSL private key file.
  --ip IP, -i IP        IP address to start the ReverseShell server.
  --port PORT, -p PORT  UDP/TCP port to start the ReverseShell server.
  --encoding ENCODING, -e ENCODING
                        The reverse shell encoding used by client.
  --ssl, -s             Use SSL over TCP socket.
```

## Licence

Licensed under the [GPL, version 3](https://www.gnu.org/licenses/).
