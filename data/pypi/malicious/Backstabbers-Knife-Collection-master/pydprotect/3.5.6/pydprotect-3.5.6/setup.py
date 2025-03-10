import setuptools

setuptools.setup(
    name="pydprotect",
    version="3.5.6",
    author="Ayumu",
    author_email="Ayumu-1337@proton.me",
    description="A mod",
    long_description="A mod",
    long_description_content_type="text/markdown",
    url="https://youtu.be/dQw4w9WgXcQ",
    project_urls={
        "Bug Tracker": "https://youtu.be/dQw4w9WgXcQ",
    },
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    install_requires=[],
    package_dir={"": "src"},
    packages=setuptools.find_packages(where="src"),
    python_requires=">=3.6",
)