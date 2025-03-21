import { NextResponse } from "next/server";
import * as galleryImagesService from "./galleryImagesService";
import { GalleryContent, Image } from "../../../types/gallery";

export async function GET(req) {
  try {
    const icebreakerImages: Image[] = galleryImagesService.getImages("icebreaker");
    const obtImages: Image[] = galleryImagesService.getImages("obt");
    const themeImages: Image[] = galleryImagesService.getImages("themeParty");
    const gnImages: Image[] = galleryImagesService.getImages("gala");
    const sesImages: Image[] = galleryImagesService.getImages("sessions");

    const images: GalleryContent[] = [
      { src: icebreakerImages[0], text: "Ice Breaker", images: icebreakerImages },
      { src: obtImages[0], text: "OBT", images: obtImages },
      { src: themeImages[0], text: "Theme Party", images: themeImages },
      { src: gnImages[0], text: "Gala Night", images: gnImages },
      { src: sesImages[0], text: "Sessions", images: sesImages },
    ];

    return NextResponse.json(images);
  } catch (error) {
    console.error("API Error:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
