import { imageProvider } from "api";
import { mediaType } from "./consts/media-type";

export class Media {
  constructor(nativeData) {
    this.id = nativeData.id;
    this.poster =
      (nativeData.poster_path &&
        imageProvider.getImageUrl(nativeData.poster_path)) ||
      "";
    this.backdrop =
      (nativeData.backdrop_path &&
        imageProvider.getImageUrl(nativeData.backdrop_path)) ||
      "";
    this.title = nativeData.title || "";
    this.overview = nativeData.overview || "";
    this.rating = nativeData.vote_average || "";
    this.genres = nativeData.genres;
    this.type = mediaType.OTHER;
  }
}
