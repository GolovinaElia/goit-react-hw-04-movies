import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage/HomePage';
import MoviesPage from './views/MoviesPage/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';
import NotFoundView from './views/NotFoundView/NotFoundView';
import AppBar from './components/AppBar/AppBar';
import routes from './routes';

const App = () => {
  return (
    <>
      <AppBar />
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.MovieDetails} component={MovieDetailsPage} />
        <Route path={routes.page} component={MoviesPage} />
        <Route component={NotFoundView} />
      </Switch>
    </>
  );
};

export default App;
