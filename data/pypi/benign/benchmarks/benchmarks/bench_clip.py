from .common import Benchmark

import numpy as np


class ClipFloat(Benchmark):
    param_names = ["dtype", "size"]
    params = [
        [np.float32, np.float64, np.longdouble],
        [100, 100_000]
    ]

    def setup(self, dtype, size):
        rng = np.random.default_rng()
        self.array = rng.random(size=size).astype(dtype)
        self.dataout = np.full_like(self.array, 0.5)

    def time_clip(self, dtype, size):
        np.clip(self.array, 0.125, 0.875, self.dataout)


class ClipInteger(Benchmark):
    param_names = ["dtype", "size"]
    params = [
        [np.int32, np.int64],
        [100, 100_000]
    ]

    def setup(self, dtype, size):
        rng = np.random.default_rng()
        self.array = rng.integers(256, size=size, dtype=dtype)
        self.dataout = np.full_like(self.array, 128)

    def time_clip(self, dtype, size):
        np.clip(self.array, 32, 224, self.dataout)
