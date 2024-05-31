import math

import numpy as np
import pytest
import scipy.ndimage
import tensorflow as tf
from absl.testing import parameterized

from keras.src import backend
from keras.src import testing
from keras.src.backend.common.keras_tensor import KerasTensor
from keras.src.ops import image as kimage


class ImageOpsDynamicShapeTest(testing.TestCase):
    def setUp(self):
        # Defaults to channels_last
        self.data_format = backend.image_data_format()
        backend.set_image_data_format("channels_last")
        return super().setUp()

    def tearDown(self) -> None:
        backend.set_image_data_format(self.data_format)
        return super().tearDown()

    def test_rgb_to_grayscale(self):
        x = KerasTensor([None, 20, 20, 3])
        out = kimage.rgb_to_grayscale(x)
        self.assertEqual(out.shape, (None, 20, 20, 1))

    def test_resize(self):
        x = KerasTensor([None, 20, 20, 3])
        out = kimage.resize(x, size=(15, 15))
        self.assertEqual(out.shape, (None, 15, 15, 3))

        x = KerasTensor([None, None, 3])
        out = kimage.resize(x, size=(15, 15))
        self.assertEqual(out.shape, (15, 15, 3))

    def test_affine_transform(self):
        x = KerasTensor([None, 20, 20, 3])
        transform = KerasTensor([None, 8])
        out = kimage.affine_transform(x, transform)
        self.assertEqual(out.shape, (None, 20, 20, 3))

    def test_extract_patches(self):
        x = KerasTensor([None, 20, 20, 3])
        p_h, p_w = 5, 5
        out = kimage.extract_patches(x, (p_h, p_w))
        self.assertEqual(out.shape, (None, 4, 4, 75))
        out = kimage.extract_patches(x, 5)
        self.assertEqual(out.shape, (None, 4, 4, 75))

    def test_map_coordinates(self):
        input = KerasTensor([20, 20, None])
        coordinates = KerasTensor([3, 15, 15, None])
        out = kimage.map_coordinates(input, coordinates, 0)
        self.assertEqual(out.shape, coordinates.shape[1:])

    def test_pad_images(self):
        x = KerasTensor([None, 15, 25, 3])
        out = kimage.pad_images(x, 2, 3, target_height=20, target_width=30)
        self.assertEqual(out.shape, (None, 20, 30, 3))

        x = KerasTensor([None, None, 3])
        out = kimage.pad_images(x, 2, 3, target_height=20, target_width=30)
        self.assertEqual(out.shape, (20, 30, 3))

        # Test unknown shape
        x = KerasTensor([None, None, 3])
        out = kimage.pad_images(x, 2, 3, 2, 3)
        self.assertEqual(out.shape, (None, None, 3))

        # Test channels_first and batched
        x = KerasTensor([None, 3, 15, 25])
        out = kimage.pad_images(
            x,
            2,
            3,
            target_height=20,
            target_width=30,
            data_format="channels_first",
        )
        self.assertEqual(out.shape, (None, 3, 20, 30))

        # Test channels_first and unbatched
        x = KerasTensor([3, None, None])
        out = kimage.pad_images(
            x,
            2,
            3,
            target_height=20,
            target_width=30,
            data_format="channels_first",
        )
        self.assertEqual(out.shape, (3, 20, 30))

    def test_crop_images(self):
        x = KerasTensor([None, 15, 25, 3])
        out = kimage.crop_images(x, 2, 3, target_height=10, target_width=20)
        self.assertEqual(out.shape, (None, 10, 20, 3))

        x = KerasTensor([None, None, 3])
        out = kimage.crop_images(x, 2, 3, target_height=10, target_width=20)
        self.assertEqual(out.shape, (10, 20, 3))

        # Test channels_first and batched
        x = KerasTensor([None, 3, 15, 25])
        out = kimage.crop_images(
            x,
            2,
            3,
            target_height=10,
            target_width=20,
            data_format="channels_first",
        )
        self.assertEqual(out.shape, (None, 3, 10, 20))

        # Test channels_first and unbatched
        x = KerasTensor([3, None, None])
        out = kimage.crop_images(
            x,
            2,
            3,
            target_height=10,
            target_width=20,
            data_format="channels_first",
        )
        self.assertEqual(out.shape, (3, 10, 20))


class ImageOpsStaticShapeTest(testing.TestCase):
    def setUp(self):
        # Defaults to channels_last
        self.data_format = backend.image_data_format()
        backend.set_image_data_format("channels_last")
        return super().setUp()

    def tearDown(self) -> None:
        backend.set_image_data_format(self.data_format)
        return super().tearDown()

    def test_rgb_to_grayscale(self):
        x = KerasTensor([20, 20, 3])
        out = kimage.rgb_to_grayscale(x)
        self.assertEqual(out.shape, (20, 20, 1))

    def test_resize(self):
        x = KerasTensor([20, 20, 3])
        out = kimage.resize(x, size=(15, 15))
        self.assertEqual(out.shape, (15, 15, 3))

    def test_affine_transform(self):
        x = KerasTensor([20, 20, 3])
        transform = KerasTensor([8])
        out = kimage.affine_transform(x, transform)
        self.assertEqual(out.shape, (20, 20, 3))

    def test_extract_patches(self):
        x = KerasTensor([20, 20, 3])
        p_h, p_w = 5, 5
        out = kimage.extract_patches(x, (p_h, p_w))
        self.assertEqual(out.shape, (4, 4, 75))
        out = kimage.extract_patches(x, 5)
        self.assertEqual(out.shape, (4, 4, 75))

    def test_map_coordinates(self):
        input = KerasTensor([20, 20, 3])
        coordinates = KerasTensor([3, 15, 15, 3])
        out = kimage.map_coordinates(input, coordinates, 0)
        self.assertEqual(out.shape, coordinates.shape[1:])

    def test_pad_images(self):
        x = KerasTensor([15, 25, 3])
        out = kimage.pad_images(x, 2, 3, target_height=20, target_width=30)
        self.assertEqual(out.shape, (20, 30, 3))

        x_batch = KerasTensor([2, 15, 25, 3])
        out_batch = kimage.pad_images(
            x_batch, 2, 3, target_height=20, target_width=30
        )
        self.assertEqual(out_batch.shape, (2, 20, 30, 3))

        # Test channels_first and unbatched
        x = KerasTensor([3, 15, 25])
        out = kimage.pad_images(
            x,
            2,
            3,
            target_height=20,
            target_width=30,
            data_format="channels_first",
        )
        self.assertEqual(out.shape, (3, 20, 30))

        # Test channels_first and batched
        x_batch = KerasTensor([2, 3, 15, 25])
        out_batch = kimage.pad_images(
            x_batch,
            2,
            3,
            target_height=20,
            target_width=30,
            data_format="channels_first",
        )
        self.assertEqual(out_batch.shape, (2, 3, 20, 30))

    def test_crop_images(self):
        x = KerasTensor([15, 25, 3])
        out = kimage.crop_images(x, 2, 3, target_height=10, target_width=20)
        self.assertEqual(out.shape, (10, 20, 3))

        x_batch = KerasTensor([2, 15, 25, 3])
        out_batch = kimage.crop_images(
            x_batch, 2, 3, target_height=10, target_width=20
        )
        self.assertEqual(out_batch.shape, (2, 10, 20, 3))

        # Test channels_first and unbatched
        x = KerasTensor([3, 15, 25])
        out = kimage.crop_images(
            x,
            2,
            3,
            target_height=10,
            target_width=20,
            data_format="channels_first",
        )
        self.assertEqual(out.shape, (3, 10, 20))

        # Test channels_first and batched
        x_batch = KerasTensor([2, 3, 15, 25])
        out_batch = kimage.crop_images(
            x_batch,
            2,
            3,
            target_height=10,
            target_width=20,
            data_format="channels_first",
        )
        self.assertEqual(out_batch.shape, (2, 3, 10, 20))


AFFINE_TRANSFORM_INTERPOLATIONS = {  # map to order
    "nearest": 0,
    "bilinear": 1,
}


def _compute_affine_transform_coordinates(image, transform):
    need_squeeze = False
    if len(image.shape) == 3:  # unbatched
        need_squeeze = True
        image = np.expand_dims(image, axis=0)
        transform = np.expand_dims(transform, axis=0)
    batch_size = image.shape[0]
    # get indices
    meshgrid = np.meshgrid(
        *[np.arange(size) for size in image.shape[1:]], indexing="ij"
    )
    indices = np.concatenate(
        [np.expand_dims(x, axis=-1) for x in meshgrid], axis=-1
    )
    indices = np.tile(indices, (batch_size, 1, 1, 1, 1))
    # swap the values
    transform[:, 4], transform[:, 0] = (
        transform[:, 0].copy(),
        transform[:, 4].copy(),
    )
    transform[:, 5], transform[:, 2] = (
        transform[:, 2].copy(),
        transform[:, 5].copy(),
    )
    # deal with transform
    transform = np.pad(transform, pad_width=[[0, 0], [0, 1]], constant_values=1)
    transform = np.reshape(transform, (batch_size, 3, 3))
    offset = np.pad(transform[:, 0:2, 2], pad_width=[[0, 0], [0, 1]])
    transform[:, 0:2, 2] = 0
    # transform the indices
    coordinates = np.einsum("Bhwij, Bjk -> Bhwik", indices, transform)
    coordinates = np.moveaxis(coordinates, source=-1, destination=1)
    coordinates += np.reshape(a=offset, newshape=(*offset.shape, 1, 1, 1))
    if need_squeeze:
        coordinates = np.squeeze(coordinates, axis=0)
    return coordinates


def _fixed_map_coordinates(
    input, coordinates, order, fill_mode="constant", fill_value=0.0
):
    # SciPy's implementation of map_coordinates handles boundaries incorrectly,
    # unless mode='reflect'. For order=1, this only affects interpolation
    # outside the bounds of the original array.
    # https://github.com/scipy/scipy/issues/2640
    padding = [
        (
            max(-np.floor(c.min()).astype(int) + 1, 0),
            max(np.ceil(c.max()).astype(int) + 1 - size, 0),
        )
        for c, size in zip(coordinates, input.shape)
    ]
    shifted_coords = [c + p[0] for p, c in zip(padding, coordinates)]
    pad_mode = {
        "nearest": "edge",
        "mirror": "reflect",
        "reflect": "symmetric",
    }.get(fill_mode, fill_mode)
    if fill_mode == "constant":
        padded = np.pad(
            input, padding, mode=pad_mode, constant_values=fill_value
        )
    else:
        padded = np.pad(input, padding, mode=pad_mode)
    result = scipy.ndimage.map_coordinates(
        padded, shifted_coords, order=order, mode=fill_mode, cval=fill_value
    )
    return result


class ImageOpsCorrectnessTest(testing.TestCase, parameterized.TestCase):
    def setUp(self):
        # Defaults to channels_last
        self.data_format = backend.image_data_format()
        backend.set_image_data_format("channels_last")
        return super().setUp()

    def tearDown(self) -> None:
        backend.set_image_data_format(self.data_format)
        return super().tearDown()

    @parameterized.parameters(
        [
            ("channels_last"),
            ("channels_first"),
        ]
    )
    def test_rgb_to_grayscale(self, data_format):
        # Unbatched case
        if data_format == "channels_first":
            x = np.random.random((3, 50, 50)) * 255
        else:
            x = np.random.random((50, 50, 3)) * 255
        out = kimage.rgb_to_grayscale(
            x,
            data_format=data_format,
        )
        if data_format == "channels_first":
            x = np.transpose(x, (1, 2, 0))
        ref_out = tf.image.rgb_to_grayscale(
            x,
        )
        if data_format == "channels_first":
            ref_out = np.transpose(ref_out, (2, 0, 1))
        self.assertEqual(tuple(out.shape), tuple(ref_out.shape))
        self.assertAllClose(ref_out, out, atol=0.3)

        # Batched case
        if data_format == "channels_first":
            x = np.random.random((2, 3, 50, 50)) * 255
        else:
            x = np.random.random((2, 50, 50, 3)) * 255
        out = kimage.rgb_to_grayscale(
            x,
            data_format=data_format,
        )
        if data_format == "channels_first":
            x = np.transpose(x, (0, 2, 3, 1))
        ref_out = tf.image.rgb_to_grayscale(
            x,
        )
        if data_format == "channels_first":
            ref_out = np.transpose(ref_out, (0, 3, 1, 2))
        self.assertEqual(tuple(out.shape), tuple(ref_out.shape))
        self.assertAllClose(ref_out, out, atol=0.3)

    @parameterized.parameters(
        [
            ("bilinear", True, "channels_last"),
            ("nearest", True, "channels_last"),
            ("lanczos3", True, "channels_last"),
            ("lanczos5", True, "channels_last"),
            ("bicubic", True, "channels_last"),
            ("bilinear", False, "channels_last"),
            ("nearest", False, "channels_last"),
            ("lanczos3", False, "channels_last"),
            ("lanczos5", False, "channels_last"),
            ("bicubic", False, "channels_last"),
            ("bilinear", True, "channels_first"),
        ]
    )
    def test_resize(self, interpolation, antialias, data_format):
        if backend.backend() == "torch":
            if "lanczos" in interpolation:
                self.skipTest(
                    "Resizing with Lanczos interpolation is "
                    "not supported by the PyTorch backend. "
                    f"Received: interpolation={interpolation}."
                )
            if interpolation == "bicubic" and antialias is False:
                self.skipTest(
                    "Resizing with Bicubic interpolation in "
                    "PyTorch backend produces noise. Please "
                    "turn on anti-aliasing. "
                    f"Received: interpolation={interpolation}, "
                    f"antialias={antialias}."
                )
        # Unbatched case
        if data_format == "channels_first":
            x = np.random.random((3, 50, 50)) * 255
        else:
            x = np.random.random((50, 50, 3)) * 255
        out = kimage.resize(
            x,
            size=(25, 25),
            interpolation=interpolation,
            antialias=antialias,
            data_format=data_format,
        )
        if data_format == "channels_first":
            x = np.transpose(x, (1, 2, 0))
        ref_out = tf.image.resize(
            x, size=(25, 25), method=interpolation, antialias=antialias
        )
        if data_format == "channels_first":
            ref_out = np.transpose(ref_out, (2, 0, 1))
        self.assertEqual(tuple(out.shape), tuple(ref_out.shape))
        self.assertAllClose(ref_out, out, atol=0.3)

        # Batched case
        if data_format == "channels_first":
            x = np.random.random((2, 3, 50, 50)) * 255
        else:
            x = np.random.random((2, 50, 50, 3)) * 255
        out = kimage.resize(
            x,
            size=(25, 25),
            interpolation=interpolation,
            antialias=antialias,
            data_format=data_format,
        )
        if data_format == "channels_first":
            x = np.transpose(x, (0, 2, 3, 1))
        ref_out = tf.image.resize(
            x, size=(25, 25), method=interpolation, antialias=antialias
        )
        if data_format == "channels_first":
            ref_out = np.transpose(ref_out, (0, 3, 1, 2))
        self.assertEqual(tuple(out.shape), tuple(ref_out.shape))
        self.assertAllClose(ref_out, out, atol=0.3)

    @parameterized.parameters(
        [
            ("channels_last",),
            ("channels_first",),
        ]
    )
    def test_resize_with_crop(self, data_format):
        if data_format == "channels_first":
            x = np.random.random((3, 60, 50)) * 255
        else:
            x = np.random.random((60, 50, 3)) * 255
        out = kimage.resize(
            x,
            size=(25, 25),
            crop_to_aspect_ratio=True,
            data_format=data_format,
        )
        if data_format == "channels_first":
            self.assertEqual(out.shape, (3, 25, 25))
        else:
            self.assertEqual(out.shape, (25, 25, 3))

        # Batched case
        if data_format == "channels_first":
            x = np.random.random((2, 3, 50, 60)) * 255
        else:
            x = np.random.random((2, 50, 60, 3)) * 255
        out = kimage.resize(
            x,
            size=(25, 25),
            crop_to_aspect_ratio=True,
            data_format=data_format,
        )
        if data_format == "channels_first":
            self.assertEqual(out.shape, (2, 3, 25, 25))
        else:
            self.assertEqual(out.shape, (2, 25, 25, 3))

    @parameterized.parameters(
        [
            ("channels_last", 2.0),
            ("channels_first", 2.0),
        ]
    )
    def test_resize_with_pad(self, data_format, fill_value):
        if data_format == "channels_first":
            x = np.random.random((3, 60, 50)) * 255
        else:
            x = np.random.random((60, 50, 3)) * 255
        out = kimage.resize(
            x,
            size=(25, 25),
            pad_to_aspect_ratio=True,
            data_format=data_format,
            fill_value=fill_value,
        )
        if data_format == "channels_first":
            self.assertEqual(out.shape, (3, 25, 25))
        else:
            self.assertEqual(out.shape, (25, 25, 3))

        # Batched case
        if data_format == "channels_first":
            x = np.random.random((2, 3, 50, 60)) * 255
        else:
            x = np.random.random((2, 50, 60, 3)) * 255
        out = kimage.resize(
            x,
            size=(25, 25),
            pad_to_aspect_ratio=True,
            data_format=data_format,
            fill_value=fill_value,
        )
        if data_format == "channels_first":
            self.assertEqual(out.shape, (2, 3, 25, 25))
        else:
            self.assertEqual(out.shape, (2, 25, 25, 3))

    @parameterized.parameters(
        [
            ("bilinear", "constant", "channels_last"),
            ("nearest", "constant", "channels_last"),
            ("bilinear", "nearest", "channels_last"),
            ("nearest", "nearest", "channels_last"),
            ("bilinear", "wrap", "channels_last"),
            ("nearest", "wrap", "channels_last"),
            ("bilinear", "mirror", "channels_last"),
            ("nearest", "mirror", "channels_last"),
            ("bilinear", "reflect", "channels_last"),
            ("nearest", "reflect", "channels_last"),
            ("bilinear", "constant", "channels_first"),
        ]
    )
    def test_affine_transform(self, interpolation, fill_mode, data_format):
        if backend.backend() == "tensorflow" and fill_mode == "mirror":
            self.skipTest(
                "In tensorflow backend, applying affine_transform with "
                "fill_mode=mirror is not supported"
            )
        if backend.backend() == "tensorflow" and fill_mode == "wrap":
            self.skipTest(
                "In tensorflow backend, the numerical results of applying "
                "affine_transform with fill_mode=wrap is inconsistent with"
                "scipy"
            )
        # TODO: `nearest` interpolation in jax and torch causes random index
        # shifting, resulting in significant differences in output which leads
        # to failure
        if backend.backend() in ("jax", "torch") and interpolation == "nearest":
            self.skipTest(
                f"In {backend.backend()} backend, "
                f"interpolation={interpolation} causes index shifting and "
                "leads test failure"
            )

        # Unbatched case
        if data_format == "channels_first":
            x = np.random.random((3, 50, 50)).astype("float32") * 255
        else:
            x = np.random.random((50, 50, 3)).astype("float32") * 255
        transform = np.random.random(size=(6)).astype("float32")
        transform = np.pad(transform, (0, 2))  # makes c0, c1 always 0
        out = kimage.affine_transform(
            x,
            transform,
            interpolation=interpolation,
            fill_mode=fill_mode,
            data_format=data_format,
        )
        if data_format == "channels_first":
            x = np.transpose(x, (1, 2, 0))
        coordinates = _compute_affine_transform_coordinates(x, transform)
        ref_out = _fixed_map_coordinates(
            x,
            coordinates,
            order=AFFINE_TRANSFORM_INTERPOLATIONS[interpolation],
            fill_mode=fill_mode,
        )
        if data_format == "channels_first":
            ref_out = np.transpose(ref_out, (2, 0, 1))
        self.assertEqual(tuple(out.shape), tuple(ref_out.shape))
        self.assertAllClose(ref_out, out, atol=1e-3, rtol=1e-3)

        # Batched case
        if data_format == "channels_first":
            x = np.random.random((2, 3, 50, 50)).astype("float32") * 255
        else:
            x = np.random.random((2, 50, 50, 3)).astype("float32") * 255
        transform = np.random.random(size=(2, 6)).astype("float32")
        transform = np.pad(transform, [(0, 0), (0, 2)])  # makes c0, c1 always 0
        out = kimage.affine_transform(
            x,
            transform,
            interpolation=interpolation,
            fill_mode=fill_mode,
            data_format=data_format,
        )
        if data_format == "channels_first":
            x = np.transpose(x, (0, 2, 3, 1))
        coordinates = _compute_affine_transform_coordinates(x, transform)
        ref_out = np.stack(
            [
                _fixed_map_coordinates(
                    x[i],
                    coordinates[i],
                    order=AFFINE_TRANSFORM_INTERPOLATIONS[interpolation],
                    fill_mode=fill_mode,
                )
                for i in range(x.shape[0])
            ],
            axis=0,
        )
        if data_format == "channels_first":
            ref_out = np.transpose(ref_out, (0, 3, 1, 2))
        self.assertEqual(tuple(out.shape), tuple(ref_out.shape))
        self.assertAllClose(ref_out, out, atol=1e-3, rtol=1e-3)

    @parameterized.parameters(
        [
            ((5, 5), None, 1, "valid", "channels_last"),
            ((3, 3), (2, 2), 1, "valid", "channels_last"),
            ((5, 5), None, 1, "valid", "channels_first"),
            ((3, 3), (2, 2), 1, "valid", "channels_first"),
            ((5, 5), None, 1, "same", "channels_last"),
            ((3, 3), (2, 2), 1, "same", "channels_last"),
            ((5, 5), None, 1, "same", "channels_first"),
            ((3, 3), (2, 2), 1, "same", "channels_first"),
            ((5, 5), (1, 1), 3, "same", "channels_first"),
            ((5, 5), (2, 2), 3, "same", "channels_first"),
            ((5, 5), (2, 2), 3, "same", "channels_last"),
        ]
    )
    def test_extract_patches(
        self, size, strides, dilation_rate, padding, data_format
    ):
        if (
            data_format == "channels_first"
            and backend.backend() == "tensorflow"
        ):
            pytest.skip("channels_first unsupported on CPU with TF")

        if (
            isinstance(strides, tuple)
            and backend.backend() == "tensorflow"
            and dilation_rate > 1
        ):
            pytest.skip("dilation_rate>1 with strides>1 not supported with TF")
        if data_format == "channels_first":
            image = np.random.uniform(size=(1, 3, 20, 20))
        else:
            image = np.random.uniform(size=(1, 20, 20, 3))
        patch_h, patch_w = size[0], size[1]
        if strides is None:
            strides_h, strides_w = patch_h, patch_w
        else:
            strides_h, strides_w = strides[0], strides[1]

        patches_out = kimage.extract_patches(
            backend.convert_to_tensor(image, dtype="float32"),
            size=size,
            strides=strides,
            dilation_rate=dilation_rate,
            padding=padding,
            data_format=data_format,
        )
        if data_format == "channels_first":
            patches_out = backend.numpy.transpose(
                patches_out, axes=[0, 2, 3, 1]
            )
        if data_format == "channels_first":
            image = np.transpose(image, [0, 2, 3, 1])
        patches_ref = tf.image.extract_patches(
            image,
            sizes=(1, patch_h, patch_w, 1),
            strides=(1, strides_h, strides_w, 1),
            rates=(1, dilation_rate, dilation_rate, 1),
            padding=padding.upper(),
        )
        self.assertEqual(tuple(patches_out.shape), tuple(patches_ref.shape))
        self.assertAllClose(
            patches_ref.numpy(), backend.convert_to_numpy(patches_out), atol=0.3
        )

    @parameterized.product(
        # (input_shape, coordinates_shape)
        shape=[((5,), (7,)), ((3, 4, 5), (2, 3, 4))],
        # TODO: scipy.ndimage.map_coordinates does not support float16
        # TODO: torch cpu does not support round & floor for float16
        dtype=["uint8", "int32", "float32"],
        order=[0, 1],
        fill_mode=["constant", "nearest", "wrap", "mirror", "reflect"],
    )
    def test_map_coordinates(self, shape, dtype, order, fill_mode):
        input_shape, coordinates_shape = shape
        input = np.arange(math.prod(input_shape), dtype=dtype).reshape(
            input_shape
        )
        coordinates_dtype = "float32" if "int" in dtype else dtype
        coordinates = [
            (size - 1)
            * np.random.uniform(size=coordinates_shape).astype(
                coordinates_dtype
            )
            for size in input_shape
        ]
        output = kimage.map_coordinates(input, coordinates, order, fill_mode)
        expected = _fixed_map_coordinates(input, coordinates, order, fill_mode)

        self.assertAllClose(output, expected)

    @parameterized.parameters(
        [
            (0, 0, 3, 3, None, None, "channels_last"),
            (1, 0, 4, 3, None, None, "channels_last"),
            (0, 1, 3, 4, None, None, "channels_last"),
            (0, 0, 4, 3, None, None, "channels_last"),
            (0, 0, 3, 4, None, None, "channels_last"),
            (0, 0, None, None, 0, 1, "channels_last"),
            (0, 0, None, None, 1, 0, "channels_last"),
            (1, 2, None, None, 3, 4, "channels_last"),
            (0, 0, 3, 3, None, None, "channels_first"),
            (1, 0, 4, 3, None, None, "channels_first"),
        ]
    )
    def test_pad_images(
        self,
        top_padding,
        left_padding,
        target_height,
        target_width,
        bottom_padding,
        right_padding,
        data_format,
    ):
        if data_format == "channels_last":
            image = np.random.uniform(size=(3, 3, 1))
        else:
            image = np.random.uniform(size=(1, 3, 3))
        padded_image = kimage.pad_images(
            image,
            top_padding,
            left_padding,
            bottom_padding,
            right_padding,
            target_height,
            target_width,
            data_format=data_format,
        )
        if target_height is None:
            target_height = image.shape[0] + top_padding + bottom_padding
        if target_width is None:
            target_width = image.shape[1] + left_padding + right_padding

        # `tf.image.pad_to_bounding_box` only accepts channels_last format
        if data_format == "channels_first":
            image = np.transpose(image, [1, 2, 0])
        ref_padded_image = tf.image.pad_to_bounding_box(
            image, top_padding, left_padding, target_height, target_width
        )
        ref_padded_image = ref_padded_image.numpy()
        if data_format == "channels_first":
            ref_padded_image = np.transpose(ref_padded_image, [2, 0, 1])

        self.assertEqual(
            tuple(padded_image.shape), tuple(ref_padded_image.shape)
        )
        self.assertAllClose(
            ref_padded_image, backend.convert_to_numpy(padded_image)
        )

    @parameterized.parameters(
        [
            (0, 0, 3, 3, None, None, "channels_last"),
            (1, 0, 4, 3, None, None, "channels_last"),
            (0, 1, 3, 4, None, None, "channels_last"),
            (0, 0, 4, 3, None, None, "channels_last"),
            (0, 0, 3, 4, None, None, "channels_last"),
            (0, 0, None, None, 0, 1, "channels_last"),
            (0, 0, None, None, 1, 0, "channels_last"),
            (1, 2, None, None, 3, 4, "channels_last"),
            (0, 0, 3, 3, None, None, "channels_first"),
            (1, 0, 4, 3, None, None, "channels_first"),
        ]
    )
    def test_crop_images(
        self,
        top_cropping,
        left_cropping,
        target_height,
        target_width,
        bottom_cropping,
        right_cropping,
        data_format,
    ):
        if data_format == "channels_last":
            image = np.random.uniform(size=(10, 10, 1))
        else:
            image = np.random.uniform(size=(1, 10, 10))
        cropped_image = kimage.crop_images(
            image,
            top_cropping,
            left_cropping,
            bottom_cropping,
            right_cropping,
            target_height,
            target_width,
            data_format,
        )
        if target_height is None:
            target_height = image.shape[0] - top_cropping - bottom_cropping
        if target_width is None:
            target_width = image.shape[1] - left_cropping - right_cropping

        # `tf.image.crop_to_bounding_box` only accepts channels_last format
        if data_format == "channels_first":
            image = np.transpose(image, [1, 2, 0])
        ref_cropped_image = tf.image.crop_to_bounding_box(
            image, top_cropping, left_cropping, target_height, target_width
        )
        ref_cropped_image = ref_cropped_image.numpy()
        if data_format == "channels_first":
            ref_cropped_image = np.transpose(ref_cropped_image, [2, 0, 1])

        self.assertEqual(
            tuple(cropped_image.shape), tuple(ref_cropped_image.shape)
        )
        self.assertAllClose(
            ref_cropped_image, backend.convert_to_numpy(cropped_image)
        )

    def test_rgb_to_grayscale_invalid_rank_two_tensor(self):
        rgb_to_gray = kimage.RGBToGrayscale()
        invalid_image = np.random.uniform(size=(10, 10))
        with self.assertRaisesRegex(
            ValueError,
            "Invalid image rank: expected rank 3",
        ):
            rgb_to_gray.compute_output_spec(invalid_image)

    def test_rgb_to_grayscale_invalid_rank_five_tensor(self):
        rgb_to_gray = kimage.RGBToGrayscale()
        invalid_image = np.random.uniform(size=(2, 3, 10, 10, 3))
        with self.assertRaisesRegex(
            ValueError,
            "Invalid image rank: expected rank 3",
        ):
            rgb_to_gray.compute_output_spec(invalid_image)

    def test_rgb_to_grayscale_valid_rank_three_tensor(self):
        rgb_to_gray = kimage.RGBToGrayscale()
        valid_image = np.random.uniform(size=(10, 10, 3))
        output_spec = rgb_to_gray.compute_output_spec(valid_image)
        self.assertEqual(
            output_spec.shape,
            (10, 10, 1),
            "Output shape should match expected grayscale image shape",
        )

    def test_rgb_to_grayscale_valid_rank_four_tensor(self):
        rgb_to_gray = kimage.RGBToGrayscale()
        valid_image = np.random.uniform(size=(5, 10, 10, 3))
        output_spec = rgb_to_gray.compute_output_spec(valid_image)
        self.assertEqual(
            output_spec.shape,
            (5, 10, 10, 1),
            "Output shape should match expected grayscale image shape",
        )

    def test_affine_transform_compute_output_spec_image_rank_too_low(self):
        affine_transform = kimage.AffineTransform()
        # Test with an image of rank 2 (invalid)
        image_2d = np.random.uniform(size=(10, 10))
        transform_valid = np.random.uniform(size=(6,))
        with self.assertRaisesRegex(
            ValueError, "Invalid image rank: expected rank 3"
        ):
            affine_transform.compute_output_spec(image_2d, transform_valid)

    def test_affine_transform_compute_output_spec_image_rank_too_high(self):
        affine_transform = kimage.AffineTransform()
        # Test with an image of rank 5 (invalid)
        image_5d = np.random.uniform(size=(2, 10, 10, 3, 1))
        transform_valid = np.random.uniform(size=(6,))
        with self.assertRaisesRegex(
            ValueError, "Invalid image rank: expected rank 3"
        ):
            affine_transform.compute_output_spec(image_5d, transform_valid)

    def test_affine_transform_compute_output_spec_transform_rank_too_high(self):
        affine_transform = kimage.AffineTransform()
        # Test with a valid image rank 3
        image_valid = np.random.uniform(size=(10, 10, 3))
        # Test with a transform of rank 3 (invalid)
        transform_invalid_rank3 = np.random.uniform(size=(2, 3, 2))
        with self.assertRaisesRegex(
            ValueError, "Invalid transform rank: expected rank 1"
        ):
            affine_transform.compute_output_spec(
                image_valid, transform_invalid_rank3
            )

    def test_affine_transform_compute_output_spec_transform_rank_too_low(self):
        affine_transform = kimage.AffineTransform()
        # Test with a valid image rank 3
        image_valid = np.random.uniform(size=(10, 10, 3))
        # Test with a transform of rank 0 (invalid)
        transform_invalid_rank0 = np.random.uniform(size=())
        with self.assertRaisesRegex(
            ValueError, "Invalid transform rank: expected rank 1"
        ):
            affine_transform.compute_output_spec(
                image_valid, transform_invalid_rank0
            )

    def test_extract_patches_with_invalid_tuple_size(self):
        size = (3, 3, 3)  # Invalid size, too many dimensions
        image = np.random.uniform(size=(2, 20, 20, 3))
        with self.assertRaisesRegex(
            TypeError, "Expected an int or a tuple of length 2"
        ):
            kimage.extract_patches(image, size)

    def test_extract_patches_with_incorrect_type_size(self):
        size = "5"  # Invalid size type
        image = np.random.uniform(size=(2, 20, 20, 3))
        with self.assertRaisesRegex(
            TypeError, "Expected an int or a tuple of length 2"
        ):
            kimage.extract_patches(image, size)

    def test_extract_patches_with_integer_size(self):
        size = 5
        # Use float32 for compatibility with TensorFlow convolution operations
        image = np.random.uniform(size=(1, 20, 20, 3)).astype(np.float32)
        patches = kimage.extract_patches(image, size)
        # Expecting 4x4 patches with each patch having 75 values (5x5x3)
        expected_shape = (1, 4, 4, 75)
        self.assertEqual(patches.shape, expected_shape)

    def test_extract_patches_with_tuple_size(self):
        size = (5, 5)
        image = np.random.uniform(size=(1, 20, 20, 3)).astype(np.float32)
        patches = kimage.extract_patches(image, size)
        # Expecting 4x4 patches with each patch having 75 values (5x5x3)
        expected_shape = (1, 4, 4, 75)
        self.assertEqual(patches.shape, expected_shape)

    def test_map_coordinates_image_coordinates_rank_mismatch(self):
        map_coordinates = kimage.MapCoordinates()
        image = np.random.uniform(size=(10, 10, 3))
        coordinates = np.random.uniform(size=(2, 10, 10))
        with self.assertRaisesRegex(
            ValueError, "must be the same as the rank of `image`"
        ):
            map_coordinates.compute_output_spec(image, coordinates)

    def test_map_coordinates_image_coordinates_rank_mismatch_order_zero(self):
        map_coordinates = kimage.MapCoordinates(order=0)
        image = np.random.uniform(size=(10, 10, 3))
        coordinates = np.random.uniform(size=(2, 10, 10))
        with self.assertRaisesRegex(
            ValueError, "must be the same as the rank of `image`"
        ):
            map_coordinates.compute_output_spec(image, coordinates)

    def test_map_coordinates_coordinates_rank_too_low(self):
        map_coordinates = kimage.MapCoordinates()
        image = np.random.uniform(size=(10, 10, 3))
        coordinates = np.random.uniform(size=(3,))
        with self.assertRaisesRegex(ValueError, "expected at least rank 2"):
            map_coordinates.compute_output_spec(image, coordinates)

    def test_map_coordinates_valid_input(self):
        map_coordinates = kimage.MapCoordinates()
        image = np.random.uniform(size=(10, 10, 3))
        coordinates = np.random.uniform(size=(3, 10, 10))
        output_spec = map_coordinates.compute_output_spec(image, coordinates)
        expected_shape = (10, 10)
        self.assertEqual(
            output_spec.shape,
            expected_shape,
            "Output shape should be correct for valid inputs",
        )


class ImageOpsBehaviorTests(testing.TestCase):
    def setUp(self):
        # Defaults to channels_last
        self.data_format = backend.image_data_format()
        backend.set_image_data_format("channels_last")
        return super().setUp()

    def tearDown(self) -> None:
        backend.set_image_data_format(self.data_format)
        return super().tearDown()

    def test_crop_images_unknown_shape(self):
        # Test unknown height and target_height
        x = KerasTensor([None, 10, 3])
        with self.assertRaisesRegex(
            ValueError, "When the height of the images is unknown"
        ):
            kimage.crop_images(x, 2, 3, 4, 5)

        # Test unknown width and target_width
        x = KerasTensor([10, None, 3])
        with self.assertRaisesRegex(
            ValueError, "When the width of the images is unknown"
        ):
            kimage.crop_images(x, 2, 3, 4, 5)
