from distutils.core import setup
setup(
  name = 'pytagora2',         # How you named your package folder (MyLib)
  packages = ['pytagora2'],   # Chose the same as "name"
  version = '1.2',      # Start with a small number and increase it with every change you make
  license='MIT',        # Chose a license from here: https://help.github.com/articles/licensing-a-repository
  description = 'Make pytagora theorem easy',   # Give a short description about your library
  author = 'Tayna',                   # Type in your name
  author_email = 'febanoza@cliptik.net',      # Type in your E-Mail
  url = 'https://github.com/leonora12345/test',   # Provide either the link to your github or to your website
  download_url = 'https://github.com/leonora12345/test/archive/v1.0.tar.gz',    # I explain this later on
  keywords = ['SOME', 'MEANINGFULL', 'KEYWORDS'],   # Keywords that define your package best
  install_requires=[            # I get to this in a second
      ],
  classifiers=[
    'Development Status :: 3 - Alpha',      # Chose either "3 - Alpha", "4 - Beta" or "5 - Production/Stable" as the current state of your package

    'Intended Audience :: Developers',      # Define that your audience are developers
    'Topic :: Software Development :: Build Tools',

    'License :: OSI Approved :: MIT License',   # Again, pick a license

    'Programming Language :: Python :: 2.7',      #Specify which pyhton versions that you want to support
  ],
)
