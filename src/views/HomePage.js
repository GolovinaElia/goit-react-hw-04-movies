import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const KEY_URL = 'be8c1fddab60d3ca36450ce7d48f58dd';
class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      `${BASE_URL}/3/movie/popular?api_key=${KEY_URL}&language=en-US&page=1`,
    );
    this.setState({ movies: response.data.results });
  }
  render() {
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default HomePage;
