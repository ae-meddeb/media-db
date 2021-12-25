import { tmdbApi } from "api";

const genreService = {
  getMovieGenres() {
    return tmdbApi.getMovieGenres().then((res) => res.genres);
  },

  getTVGenres() {
    return tmdbApi.getTVGenres().then((res) => res.genres);
  },
};

export default genreService;
