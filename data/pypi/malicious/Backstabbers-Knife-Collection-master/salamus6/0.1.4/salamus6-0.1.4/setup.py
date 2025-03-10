#!/usr/bin/env python

from setuptools import setup
from setuptools.command.install import install



def createfile():
     with open('readmeandi.txt', 'w') as f:
          f.write('Create a new text file!')

class PostInstallCommand(install):
     def run(self):
         createfile()
         install.run(self)



setup(name='salamus6',
      version='0.1.4',
      description='Security project that aims to check how many developers install typoed libraries.',
      author='zer0ul',
      author_email='zer0ul@vulnium.com',
      url='https://google.com',
      packages=[],
      cmdclass={
         'install' :  PostInstallCommand,
      },

     )
