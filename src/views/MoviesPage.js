import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const KEY_URL = 'be8c1fddab60d3ca36450ce7d48f58dd';
class MoviesPage extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    const response = await axios.get(
      `${BASE_URL}/3/movie/popular?api_key=${KEY_URL}&language=en-US&page=1`,
    );
    this.setState({ movies: response.data.results });
  }
  // async componentDidMount() {
  //   const response = await axios.get(
  //     `${BASE_URL}/3/search/movie?api_key=${KEY_URL}`,
  //   );
  //   console.log(response);
  // }
  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              autoComplete="off"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${this.props.match.url}/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
