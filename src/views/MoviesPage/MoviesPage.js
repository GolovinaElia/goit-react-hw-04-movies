import React, { Component } from 'react';
import style from './MoviesPage.module.css';
import MovieList from '../../components/MovieList/MovieList';
import fetchMovies from '../../services/api';
import queryString from 'query-string';

class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
  };

  getQueryFromProps = props => queryString.parse(props.location.search).query;

  componentDidMount() {
    const query = this.getQueryFromProps(this.props);
    if (query) {
      this.getMovies(query);
    }
  }

  componentDidUpdate(prevProps) {
    const prevQuery = this.getQueryFromProps(prevProps);
    const nextQuery = this.getQueryFromProps(this.props);
    if (prevQuery !== nextQuery) {
      this.getMovies(nextQuery);
    }
  }

  getMovies = query => {
    fetchMovies
      .getSearchMovie(query)
      .then(response => response.data.results)
      .then(results => this.setState({ movies: results }))
      .catch(error => console.log(error));
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.history.push({
      search: `query=${this.state.query}`,
    });
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  render() {
    const { movies } = this.state;
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
        <MovieList movies={movies} />
      </>
    );
  }
}

export default MoviesPage;
