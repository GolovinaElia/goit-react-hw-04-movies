import React, { Component } from 'react';
import style from './MoviesPage.module.css';
import MovieList from '../../components/MovieList/MovieList';
import fetchMovies from '../../services/api';

class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    fetchMovies
      .getSearchMovie(this.state.query)
      .then(response => response.data.results)
      .then(results => this.setState({ movies: results }))
      .catch(error => console.log(error));
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value.trim() });
  };
  render() {
    return (
      <>
        <div className={style.page}>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              autoFocus
              autoComplete="off"
              placeholder="Search movies"
              value={this.state.query}
              onChange={this.handleChange}
            />
            <button
              className={style.button}
              type="submit"
              onClick={this.fetchMovie}
            >
              Search
            </button>
          </form>
        </div>
        <MovieList movies={this.state.movies} />
      </>
    );
  }
}

export default MoviesPage;
