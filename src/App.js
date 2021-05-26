import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import routes from './routes';

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage.js' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import(
    './views/MoviesPage/MoviesPage.js' /* webpackChunkName: "movies-page" */
  ),
);
const NotFoundView = lazy(() =>
  import(
    './views/NotFoundView/NotFoundView.js' /* webpackChunkName: "not-found-view" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage/MovieDetailsPage.js' /* webpackChunkName: "movie-details-page" */
  ),
);

const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.MovieDetails} component={MovieDetailsPage} />
          <Route path={routes.page} component={MoviesPage} />
          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
