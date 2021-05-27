import React, { Component } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import fetchMovies from '../../services/api';
import style from './HomePage.module.css';

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetchMovies
      .getPopularMovie()
      .then(response => response.data.results)
      .then(results => this.setState({ movies: results }))
      .catch(error => console.log(error));
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
