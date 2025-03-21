import fs from "fs";
import path from "path";
import { Image } from "../../../types/gallery";

export function getImages(type: string) {
  const imagesDirectory = path.join(process.cwd(), `public/gallery/${type}`);
  const imageFiles = fs.readdirSync(imagesDirectory);

  const images: Image[] = imageFiles.map((fileName) => ({
    src: `/gallery/${type}/${fileName}`, // Public folder automatically serves these
  }));
  return images;
}
