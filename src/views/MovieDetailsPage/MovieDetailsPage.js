import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import defaultImage from '../../components/Images/default.png';

const BASE_URL = 'https://api.themoviedb.org';
const KEY_URL = 'be8c1fddab60d3ca36450ce7d48f58dd';
class MovieDetailsPage extends Component {
  state = {
    movies: [],
    id: null,
    poster_path: null,
    original_title: null,
    release_date: null,
    overview: null,
    genres: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `${BASE_URL}/3/movie/${movieId}?api_key=${KEY_URL}&language=en-US&page=1`,
    );
    // console.log(response);
    this.setState({ ...response.data });
  }
  render() {
    const { original_title, poster_path, release_date, overview, id, genres } =
      this.state;
    const results = 'https://image.tmdb.org/t/p/w500' + poster_path;
    return (
      <>
        <div>
          <img src={results} alt={original_title} />
          <h2>{original_title}</h2>
          <p>{release_date}</p>
          <p>Overview {overview}</p>
          {
            <ul>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          }
        </div>
        <div>
          <p>
            <NavLink to={`${this.props.match.url}/${id}/cast`}>Cast</NavLink>
          </p>
          <p>
            <NavLink to={`${this.props.match.url}/${id}/reviews`}>
              Reviews
            </NavLink>
          </p>
        </div>

        <Route
          path={`/movie/${id}/reviews`}
          render={props => <Cast {...props} />}
        />
        <Route
          path={`${this.props.match.url}/${id}/reviews`}
          render={props => <Reviews {...props} />}
        />
      </>
    );
  }
}
MovieDetailsPage.defaultProps = {
  poster_path: defaultImage,
};

export default MovieDetailsPage;
