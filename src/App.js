import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import NotFoundView from './views/NotFoundView';
import style from './App.module.css';

const App = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className={style.NavLink}
            activeClassName={style.NavLinkActive}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={style.NavLink}
            activeClassName={style.NavLinkActive}
          >
            Movies
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/movies/:movieId"
            className={style.NavLink}
            activeClassName={style.NavLinkActive}
          >
            MovieDetailsPage
          </NavLink>
        </li> */}
      </ul>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
        <Route component={NotFoundView} />
      </Switch>
    </>
  );
};

export default App;
