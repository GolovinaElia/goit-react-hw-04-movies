import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import defaultImage from '../../components/Images/default.png';
import routes from '../../routes';
import fetchMovies from '../../services/api';
import style from './MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    movies: [],
    id: null,
    poster_path: null,
    original_title: null,
    release_date: null,
    vote_average: null,
    overview: null,
    genres: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchMovies
      .getPageMovie(movieId)
      .then(response => this.setState({ ...response.data }))
      .catch(error => console.log(error));
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const {
      original_title,
      poster_path,
      vote_average,
      release_date,
      overview,
      genres,
    } = this.state;
    const { location } = this.props;
    const { match } = this.props;
    const results = 'https://image.tmdb.org/t/p/w500' + poster_path;
    const moviePopularity = vote_average * 10;
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
            <p className={style.movieDetails}>User score: {moviePopularity}%</p>
            <p className={style.movieDetails}>
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
          <ul className={style.information}>
            <p className={style.informationTitle}>Additional information</p>
            <li className={style.informationItem}>
              <NavLink
                to={{
                  pathname: `${match.url}/cast`,
                  state: { from: location.state.from },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li className={style.informationItem}>
              <NavLink
                to={{
                  pathname: `${match.url}/cast`,
                  state: { from: location.state.from },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>

        <Route
          path={`${match.path}/cast`}
          render={props => <Cast {...props} />}
        />

        <Route
          path={`${match.path}/reviews`}
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
