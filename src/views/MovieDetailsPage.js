import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import Cast from '../components/Cast/Cast';

const BASE_URL = 'https://api.themoviedb.org';
const KEY_URL = 'be8c1fddab60d3ca36450ce7d48f58dd';
class MovieDetailsPage extends Component {
  state = {
    id: null,
    poster_path: null,
    original_title: null,
    release_date: null,
    overview: null,
    genres: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `${BASE_URL}/3/movie/${movieId}/credits?api_key=${KEY_URL}&language=en-US`,
    );
    this.setState({ ...response.data });
  }
  render() {
    const { original_title, poster_path, release_date, overview, id } =
      this.state;
    return (
      <>
        <div>
          <img src={poster_path} alt="" />
          <h2>{original_title}</h2>
          <p>{release_date}</p>
          <p>Overview {overview}</p>
        </div>
        <div>
          <p>
            <NavLink to={`${this.props.match.url}/${id}/cast`}>Cast</NavLink>
          </p>
          <p>
            <NavLink to="/movies/:movieId/reviews">Reviews</NavLink>
          </p>
        </div>

        <Route
          path={`${this.props.match.url}/${id}/cast`}
          render={props => <Cast {...props} />}
        />
      </>
    );
  }
}
export default MovieDetailsPage;
