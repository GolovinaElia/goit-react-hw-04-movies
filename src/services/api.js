import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const KEY_URL = 'be8c1fddab60d3ca36450ce7d48f58dd';

class Api {
  async getPopularMovie() {
    const response = await axios.get(
      `${BASE_URL}/3/movie/popular?api_key=${KEY_URL}&language=en-US&page=1`,
    );
    return response;
  }

  async getSearchMovie(query) {
    const response = await axios.get(
      `${BASE_URL}/3/search/movie?api_key=${KEY_URL}&page=1&query=${query}&include_adult=false&language=en`,
    );
    return response;
  }

  async getPageMovie(movieId) {
    const response = await axios.get(
      `${BASE_URL}/3/movie/${movieId}?api_key=${KEY_URL}&language=en-US&page=1`,
    );
    return response;
  }
  async getCast(movieId) {
    const response = await axios.get(
      `${BASE_URL}/3/movie/${movieId}/credits?api_key=${KEY_URL}>&language=en-US`,
    );
    return response;
  }

  async getReviews(movieId) {
    const response = await axios.get(
      `${BASE_URL}/3/movie/${movieId}/reviews?api_key=${KEY_URL}&language=en-US&page=1`,
    );
    return response;
  }
}

const fetchMovies = new Api();
export default fetchMovies;
