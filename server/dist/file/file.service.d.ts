export declare enum FileType {
    AUDIO = "audio",
    PICTURE = "picture"
}
export declare class FileService {
    createFile(type: FileType, file: any): Promise<string>;
}
