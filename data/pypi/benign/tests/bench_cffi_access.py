from __future__ import annotations

import time

from PIL import PyAccess

from .helper import hopper

# Not running this test by default. No DOS against CI.


def iterate_get(size, access) -> None:
    (w, h) = size
    for x in range(w):
        for y in range(h):
            access[(x, y)]


def iterate_set(size, access) -> None:
    (w, h) = size
    for x in range(w):
        for y in range(h):
            access[(x, y)] = (x % 256, y % 256, 0)


def timer(func, label, *args) -> None:
    iterations = 5000
    starttime = time.time()
    for x in range(iterations):
        func(*args)
        if time.time() - starttime > 10:
            break
    endtime = time.time()
    print(
        f"{label}: completed {x + 1} iterations in {endtime - starttime:.4f}s, "
        f"{(endtime - starttime) / (x + 1.0):.6f}s per iteration"
    )


def test_direct() -> None:
    im = hopper()
    im.load()
    # im = Image.new("RGB", (2000, 2000), (1, 3, 2))
    caccess = im.im.pixel_access(False)
    access = PyAccess.new(im, False)

    assert caccess[(0, 0)] == access[(0, 0)]

    print(f"Size: {im.width}x{im.height}")
    timer(iterate_get, "PyAccess - get", im.size, access)
    timer(iterate_set, "PyAccess - set", im.size, access)
    timer(iterate_get, "C-api - get", im.size, caccess)
    timer(iterate_set, "C-api - set", im.size, caccess)
