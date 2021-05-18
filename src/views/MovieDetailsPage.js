import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const KEY_URL = 'be8c1fddab60d3ca36450ce7d48f58dd';
class MovieDetailsPage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      `${BASE_URL}/3/movie/popular?api_key=${KEY_URL}&language=en-US&page=1`,
    );
    // console.log(response.data.results);
    this.setState({ movies: response.data.results });
  }
  render() {
    return (
      <>
        <h2>Это страница с детальной информацией о фильме</h2>;
      </>
    );
  }
}
export default MovieDetailsPage;
