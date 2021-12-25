import { api as axios } from "./config";

const api = {
  getLatestMovie() {
    return axios.get("/movie/latest");
  },

  getTrendings(type = "all", timeWindow = "week") {
    return axios.get(`/trending/${type}/${timeWindow}`);
  },

  getMovieGenres() {
    return axios.get("/genre/movie/list");
  },

  getTVGenres() {
    return axios.get("/genre/tv/list");
  },
};

export default api;
