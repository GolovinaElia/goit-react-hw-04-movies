import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './views/HomePage/HomePage';
import MoviesPage from './views/MoviesPage/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';
import NotFoundView from './views/NotFoundView/NotFoundView';
import style from './App.module.css';

const App = () => {
  return (
    <>
      <ul className={style.link}>
        <li className={style.itemLink}>
          <NavLink
            exact
            to="/"
            className="NavLink"
            activeClassName="NavLinkActive"
          >
            Home
          </NavLink>
        </li>
        <li className={style.itemLink}>
          <NavLink
            to="/movies"
            className="NavLink"
            activeClassName="NavLinkActive"
          >
            Movies
          </NavLink>
        </li>
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
