import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import defaultImage from '../../components/Images/default.png';
import style from './MovieDetailsPage.module.css';
import routes from '../../routes';

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
    this.setState({ ...response.data });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  // getReleaseDate = result => {
  //   if (result.release_date !== 'not defined') {
  //     result.release_date = result.release_date.slice(0, 4);
  //   }
  //   return result;
  // };

  render() {
    const { original_title, poster_path, release_date, overview, id, genres } =
      this.state;
    const results = 'https://image.tmdb.org/t/p/w500' + poster_path;
    return (
      <>
        <button
          type="button"
          className={style.button}
          onClick={this.handleGoBack}
        >
          <span role="img" aria-label="arrow to the left">
            ⬅
          </span>
          Go back
        </button>
        <div className={style.moviePage}>
          <img src={results} alt={original_title} />
          <div className={style.movie}>
            <h2 className={style.title}>
              {original_title}({release_date})
            </h2>
            <p className={style.movieOverview}>
              <span className={style.span}>Overview</span> {overview}
            </p>
            {
              <ul className={style.list}>
                <span className={style.span}>Genres</span>
                {genres.map(genre => (
                  <li key={genre.id} className={style.item}>
                    {genre.name}
                  </li>
                ))}
              </ul>
            }
          </div>
        </div>
        <div>
          <ul>
            <p>Additional information</p>
            <li>
              <NavLink to={`${this.props.match.url}/${id}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${this.props.match.url}/${id}/reviews`}>
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>

        <Route
          path={`${this.props.match.url}/${id}/reviews`}
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
