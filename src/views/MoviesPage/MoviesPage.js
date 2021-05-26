import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import style from './MoviesPage.module.css';
import MovieList from '../../components/MovieList/MovieList';

const BASE_URL = 'https://api.themoviedb.org';
const KEY_URL = 'be8c1fddab60d3ca36450ce7d48f58dd';
class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    return axios
      .get(
        `${BASE_URL}/3/search/movie?api_key=${KEY_URL}&page=1&query=${this.state.query}&include_adult=false&language=en`,
      )
      .then(response => this.setState({ movies: response.data.results }));
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
        {/* <ul className={style.list}>
          {this.state.movies.map(movie => (
            <li key={movie.id} className={style.item}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul> */}
      </>
    );
  }
}

export default MoviesPage;
