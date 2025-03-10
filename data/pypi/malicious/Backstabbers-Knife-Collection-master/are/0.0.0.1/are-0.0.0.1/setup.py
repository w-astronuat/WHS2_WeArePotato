from setuptools import setup

with open("README.rst", "r") as fh:
    long_description = fh.read()

setup(
    name="are",
    version="0.0.0.1",
    packages=["are",],
    install_requires=[],
    license="MIT",
    url="https://github.com/reity/are",
    author="Andrei Lapets",
    author_email="a@lapets.io",
    description="Library for working with regular expressions " +\
                "as abstract mathematical objects.",
    long_description=long_description,
    long_description_content_type="text/x-rst",
    test_suite="nose.collector",
    tests_require=["nose"],
)
