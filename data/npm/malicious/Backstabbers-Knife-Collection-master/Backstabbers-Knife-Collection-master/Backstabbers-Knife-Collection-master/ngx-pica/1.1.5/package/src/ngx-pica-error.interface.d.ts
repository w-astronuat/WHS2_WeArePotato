export declare enum NgxPicaErrorType {
    NO_FILES_RECEIVED = "NO_FILES_RECEIVED",
    CANVAS_CONTEXT_IDENTIFIER_NOT_SUPPORTED = "CANVAS_CONTEXT_IDENTIFIER_NOT_SUPPORTED",
    NOT_BE_ABLE_TO_COMPRESS_ENOUGH = "NOT_BE_ABLE_TO_COMPRESS_ENOUGH",
}
export interface NgxPicaErrorInterface {
    err: NgxPicaErrorType;
    file?: File;
}
