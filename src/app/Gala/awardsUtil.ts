import fs from "fs";
import path from "path";
import { Image } from "../../types/gala";

const chunkArray = (arr: Image[], size: number): Image[][] => {
  return arr.reduce((chunks, item, index) => {
    const chunkIndex = Math.floor(index / size);
    if (!chunks[chunkIndex]) {
      chunks[chunkIndex] = [];
    }
    chunks[chunkIndex].push(item);
    return chunks;
  }, []);
};

export default function getAwards() {
  const imagesDirectory = path.join(process.cwd(), "public/awards");
  const imageFiles = fs.readdirSync(imagesDirectory);

  const awards: Image[] = imageFiles.map((fileName) => ({
    title: "Award Title",
    frontImg: `/awards/${fileName}`, // Public folder automatically serves these
    frontAlt: fileName,
    backImg: `/nomineefileName,s/${fileName}`,
    backAlt: fileName,
  }));

  return chunkArray(awards, 3);
}
