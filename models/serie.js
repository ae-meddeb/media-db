import { mediaType } from "./consts/media-type";
import { Media } from "./media";

export class Serie extends Media {
  constructor(nativeData) {
    super(nativeData);
    this.type = mediaType.MOVIE;
    this.title = nativeData.name;
  }
}
