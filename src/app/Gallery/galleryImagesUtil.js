import fs from "fs";
import path from "path";

export function getImages(type) {
  const imagesDirectory = path.join(process.cwd(), `public/gallery/${type}`);
  const imageFiles = fs.readdirSync(imagesDirectory);

  const images =  imageFiles.map((fileName) => ({
    src: `/awards/${fileName}`, // Public folder automatically serves these
  }));

  return images;
}