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
}
const fetchMovies = new Api();
export default fetchMovies;
