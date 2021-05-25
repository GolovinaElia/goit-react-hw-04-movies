import React, { Component } from 'react';
import axios from 'axios';
import style from './HomePage.module.css';
import MovieList from '../../components/MovieList/MovieList';

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
        <h1 className={style.title}>Trending today</h1>
        <MovieList movies={this.state.movies} />
      </>
    );
  }
}
export default HomePage;
