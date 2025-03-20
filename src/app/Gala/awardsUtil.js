import fs from "fs";
import path from "path";

const chunkArray = (arr, size) => {
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

  const awards = imageFiles.map((fileName) => ({
    title: "Award Title",
    frontImg: `/awards/${fileName}`, // Public folder automatically serves these
    frontAlt: fileName,
    backImg: `/nominees/${fileName}`,
    backAlt: fileName,
  }));

  return chunkArray(awards, 3);
}
