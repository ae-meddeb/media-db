import { tmdbApi } from "api";
import { mediaType } from "models/consts/media-type";
import { Movie } from "models/movie";
import { Serie } from "models/serie";
import genreService from "./genreService";

const mediaService = {
  getWeeklyTrendings() {
    return Promise.all([
      tmdbApi.getTrendings(),
      genreService.getMovieGenres(),
      genreService.getTVGenres(),
    ]).then(([data, movieGenres, tvGenres]) => {
      return (data?.results || []).map((media) => {
        media.genres = _getGenres(
          media.genre_ids,
          media.media_type === mediaType.MOVIE ? movieGenres : tvGenres
        );

        return media.media_type === mediaType.MOVIE
          ? new Movie(media)
          : new Serie(media);
      });
    });
  },
};

function _getGenres(ids, genres) {
  return genres.filter((genre) => ids.includes(genre.id));
}

export default mediaService;
