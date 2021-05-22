import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
        `${BASE_URL}/3/search/movie?api_key=${KEY_URL}&page=1&query=666&include_adult=false&language=en`,
      )
      .then(response => console.log(response.data.results));
    // this.props.onSubmit(this.state.query);
    // this.setState({ query: '' });
    // this.setState({
    //   query: '',
    //   movies: [],
    // });
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };
  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              autoFocus
              autoComplete="off"
              placeholder="Search movies"
              value={this.state.query}
              onChange={this.handleChange}
            />
            <button type="submit" onClick={this.fetchMovie}>
              Search
            </button>
          </form>
        </div>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link to="/movies">{movie.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
