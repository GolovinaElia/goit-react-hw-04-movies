import style from './MovieList.module.css';
import { Link, withRouter } from 'react-router-dom';

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

export default withRouter(MovieList);
