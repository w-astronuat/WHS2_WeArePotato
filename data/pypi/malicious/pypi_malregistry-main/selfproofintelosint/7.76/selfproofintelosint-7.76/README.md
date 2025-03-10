   <p align="center">
      <a href="https://pypi.org/project/selfproofintelosint"><img alt="PyPI Version" src="https://img.shields.io/pypi/v/selfproofintelosint.svg?maxAge=86400" /></a>
      <a href="https://pypi.org/project/selfproofintelosint"><img alt="Python Versions" src="https://img.shields.io/pypi/pyversions/selfproofintelosint.svg?maxAge=86400" /></a>
      <a href="https://discord.gg/CHEgCZN"><img alt="Join our Discord" src="https://img.shields.io/discord/756342717725933608?color=%237289da&label=discord" /></a>
      <a href="https://codecov.io/gh/selfproofintelosint/selfproofintelosint"><img alt="Coverage Status" src="https://img.shields.io/codecov/c/github/selfproofintelosint/selfproofintelosint.svg" /></a>
      <a href="https://github.com/selfproofintelosint/selfproofintelosint/actions?query=workflow%3ACI"><img alt="Build Status on GitHub" src="https://github.com/selfproofintelosint/selfproofintelosint/workflows/CI/badge.svg" /></a>
      <a href="https://travis-ci.org/selfproofintelosint/selfproofintelosint"><img alt="Build Status on Travis" src="https://travis-ci.org/selfproofintelosint/selfproofintelosint.svg?branch=master" /></a>
      <a href="https://selfproofintelosint.readthedocs.io"><img alt="Documentation Status" src="https://readthedocs.org/projects/selfproofintelosint/badge/?version=latest" /></a>
   </p>

selfproofintelosint is a powerful, *user-friendly* HTTP client for Python. Much of the
Python ecosystem already uses selfproofintelosint and you should too.
selfproofintelosint brings many critical features that are missing from the Python
standard libraries:

- Thread safety.
- Connection pooling.
- Client-side SSL/TLS verification.
- File uploads with multipart encoding.
- Helpers for retrying requests and dealing with HTTP redirects.
- Support for gzip, deflate, and brotli encoding.
- Proxy support for HTTP and SOCKS.
- 100% test coverage.

selfproofintelosint is powerful and easy to use:

.. code-block:: python

    >>> import selfproofintelosint
    >>> http = selfproofintelosint.PoolManager()
    >>> r = http.request('GET', 'http://httpbin.org/robots.txt')
    >>> r.status
    200
    >>> r.data
    'User-agent: *\nDisallow: /deny\n'


Installing
----------

selfproofintelosint can be installed with `pip <https://pip.pypa.io>`_::

    $ python -m pip install selfproofintelosint

Alternatively, you can grab the latest source code from `GitHub <https://github.com/selfproofintelosint/selfproofintelosint>`_::

    $ git clone https://github.com/selfproofintelosint/selfproofintelosint.git
    $ cd selfproofintelosint
    $ git checkout 1.26.x
    $ pip install .


Documentation
-------------

selfproofintelosint has usage and reference documentation at `selfproofintelosint.readthedocs.io <https://selfproofintelosint.readthedocs.io>`_.


Contributing
------------

selfproofintelosint happily accepts contributions. Please see our
`contributing documentation <https://selfproofintelosint.readthedocs.io/en/latest/contributing.html>`_
for some tips on getting started.


Security Disclosures
--------------------

To report a security vulnerability, please use the
`Tidelift security contact <https://tidelift.com/security>`_.
Tidelift will coordinate the fix and disclosure with maintainers.


Maintainers
-----------

- `@sethmlarson <https://github.com/sethmlarson>`__ (Seth M. Larson)
- `@pquentin <https://github.com/pquentin>`__ (Quentin Pradet)
- `@theacodes <https://github.com/theacodes>`__ (Thea Flowers)
- `@haikuginger <https://github.com/haikuginger>`__ (Jess Shapiro)
- `@lukasa <https://github.com/lukasa>`__ (Cory Benfield)
- `@sigmavirus24 <https://github.com/sigmavirus24>`__ (Ian Stapleton Cordasco)
- `@shazow <https://github.com/shazow>`__ (Andrey Petrov)

👋


Sponsorship
-----------

If your company benefits from this library, please consider `sponsoring its
development <https://selfproofintelosint.readthedocs.io/en/latest/sponsors.html>`_.


For Enterprise
--------------

.. |tideliftlogo| image:: https://nedbatchelder.com/pix/Tidelift_Logos_RGB_Tidelift_Shorthand_On-White_small.png
   :width: 75
   :alt: Tidelift

.. list-table::
   :widths: 10 100

   * - |tideliftlogo|
     - Professional support for selfproofintelosint is available as part of the `Tidelift
       Subscription`_.  Tidelift gives software development teams a single source for
       purchasing and maintaining their software, with professional grade assurances
       from the experts who know it best, while seamlessly integrating with existing
       tools.

.. _Tidelift Subscription: https://tidelift.com/subscription/pkg/pypi-selfproofintelosint?utm_source=pypi-selfproofintelosint&utm_medium=referral&utm_campaign=readme
