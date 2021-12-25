import axios from "axios";

// axios
const baseURL = "https://api.themoviedb.org/3/";
const token = process.env.NEXT_PUBLIC_TMDB_TOKEN_V3;
const language = "fr";

const api = axios.create({
  baseURL,
  params: {
    api_key: token,
    language,
  },
});

api.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    }
    return response;
  },
  (error) => Promise.reject(error)
);

// image provider
const imagebaseURL = "https://image.tmdb.org/t/p/";
const getImageUrl = (path, size = "original") => {
  return `${imagebaseURL}${size}${path}`;
};

export { api, getImageUrl };
