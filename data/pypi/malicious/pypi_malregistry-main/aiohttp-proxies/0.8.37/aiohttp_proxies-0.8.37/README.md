## aiohttp-socks5

[![Build Status](https://api.travis-ci.com/romis2012/aiohttp-socks5.svg?branch=master)](https://travis-ci.com/github/romis2012/aiohttp-socks5)
[![Coverage Status](https://coveralls.io/repos/github/romis2012/aiohttp-socks5/badge.svg?branch=master&_=x)](https://coveralls.io/github/romis2012/aiohttp-socks5?branch=master)
[![PyPI version](https://badge.fury.io/py/aiohttp-socks5.svg)](https://badge.fury.io/py/aiohttp-socks5)
<!--
[![Downloads](https://pepy.tech/badge/aiohttp-socks5/month)](https://pepy.tech/project/aiohttp-socks5)
-->
The `aiohttp-socks5` package provides a proxy connector for [aiohttp](https://github.com/aio-libs/aiohttp). 
Supports SOCKS4(a), SOCKS5(h), HTTP (tunneling) as well as Proxy chains.
It uses [python-socks](https://github.com/romis2012/python-socks) for core proxy functionality.


## Requirements
- Python >= 3.6
- aiohttp >= 2.3.2
- python-socks[asyncio] >= 1.0.1

## Installation
```
pip install aiohttp_proxies
```

## Usage

#### aiohttp usage:
```python
import aiohttp
from aiohttp_proxies import ProxyType, ProxyConnector, ChainProxyConnector


async def fetch(url):
    connector = ProxyConnector.from_url('socks5://user:password@127.0.0.1:1080')
    
    ### or use ProxyConnector constructor
    # connector = ProxyConnector(
    #     proxy_type=ProxyType.SOCKS5,
    #     host='127.0.0.1',
    #     port=1080,
    #     username='user',
    #     password='password',
    #     rdns=True
    # )
    
    ### proxy chaining (since ver 0.3.3)
    # connector = ChainProxyConnector.from_urls([
    #     'socks5://user:password@127.0.0.1:1080',
    #     'socks4://127.0.0.1:1081',
    #     'http://user:password@127.0.0.1:3128',
    # ])
    async with aiohttp.ClientSession(connector=connector) as session:
        async with session.get(url) as response:
            return await response.text()
```

#### aiohttp-socks5 also provides `open_connection` and `create_connection` functions:

```python
from aiohttp_proxies import open_connection

async def fetch():
    reader, writer = await open_connection(
        proxy_url='socks5://user:password@127.0.0.1:1080',
        host='check-host.net',
        port=80
    )
    request = (b"GET /ip HTTP/1.1\r\n"
               b"Host: check-host.net\r\n"
               b"Connection: close\r\n\r\n")

    writer.write(request)
    return await reader.read(-1)
```
