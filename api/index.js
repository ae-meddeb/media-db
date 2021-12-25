import tmdbV3 from "./tmdbV3";
import { getImageUrl } from "./tmdbV3/config";

export const tmdbApi = tmdbV3;
export const imageProvider = { getImageUrl };
