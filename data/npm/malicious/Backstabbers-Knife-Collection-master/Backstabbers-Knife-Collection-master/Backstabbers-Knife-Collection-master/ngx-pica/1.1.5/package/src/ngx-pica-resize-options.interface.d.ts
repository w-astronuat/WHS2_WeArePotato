export interface AspectRatioOptions {
    keepAspectRatio: boolean;
    forceMinDimensions?: boolean;
}
export interface NgxPicaResizeOptionsInterface {
    aspectRatio?: AspectRatioOptions;
    quality?: number;
    alpha?: boolean;
    unsharpAmount?: number;
    unsharpRadius?: number;
    unsharpThreshold?: number;
}
