import { mediaType } from "./consts/media-type";
import { Media } from "./media";

export class Movie extends Media {
  constructor(nativeData) {
    super(nativeData);
    this.type = mediaType.MOVIE;
  }
}
