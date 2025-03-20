import { NextResponse } from "next/server";
import * as galleryImagesService from "./galleryImagesService";

export async function GET(req) {
  const icebreakerImages = galleryImagesService.getImages("icebreaker");
  const obtImages = galleryImagesService.getImages("obt");
  const themeImages = galleryImagesService.getImages("themeParty");
  const gnImages = galleryImagesService.getImages("gala");
  const sesImages = galleryImagesService.getImages("sessions");

  const images = [
    { src: icebreakerImages[0], text: "Ice Breaker", images: icebreakerImages },
    { src: obtImages[0], text: "OBT", images: obtImages },
    { src: themeImages[0], text: "Theme Party", images: themeImages },
    { src: gnImages[0], text: "Gala Night", images: gnImages },
    { src: sesImages[0], text: "Sessions", images: sesImages },
  ];

  return NextResponse.json(images);
}
