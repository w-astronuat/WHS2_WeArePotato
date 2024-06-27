#!/usr/bin/env python
import codecs
import os
import re
import sys
import meta

try:
    from setuptools import setup
except ImportError:
    from distutils.core import setup

version = None

with codecs.open(os.path.join(os.path.abspath(os.path.dirname(
        __file__)), 'aiohttp_socks5', '__init__.py'), 'r', 'latin1') as fp:
    try:
        version = re.findall(r"^__version__ = '([^']+)'\r?$",
                             fp.read(), re.M)[0]
    except IndexError:
        raise RuntimeError('Unable to determine version.')

if sys.version_info < (3, 6, 0):
    raise RuntimeError('aiohttp-socks5 requires Python 3.6+')

with open('README.md') as f:
    long_description = f.read()

setup(
    name='aiohttp_socks5',
    author='Roman Snegirev',
    author_email='snegiryev@gmail.com',
    version=version,
    license='Apache 2',
    url='https://github.com/romis2012/aiohttp-socks',
    description='Proxy connector for aiohttp',
    long_description=long_description,
    long_description_content_type='text/markdown',
    packages=['aiohttp_socks5'],
    keywords='asyncio aiohttp socks socks5 socks4 http proxy',
    install_requires=[
        'aiohttp>=2.3.2',
        'attrs>=19.2.0',
        'python-socks[asyncio]>=2.0.0,<3.0.0',
    ],
)

