export interface Image{
    src: string;
}

export interface GalleryContent{
    src: Image;
    text: string;
    images: Image[];
}