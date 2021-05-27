import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './MovieList.module.css';

const MovieList = ({ movies, location }) => (
  <ul className={style.list}>
    {movies.map(movie => (
      <li className={style.item} key={movie.id}>
        <Link
          to={{
            pathname: `/movies/${movie.id}`,
            state: { from: location },
          }}
          className={style.homePage}
        >
          {movie.title}
        </Link>
      </li>
    ))}
  </ul>
);
MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(MovieList);
