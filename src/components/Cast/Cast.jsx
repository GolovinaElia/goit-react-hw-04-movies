import { Component } from 'react';
import fetchMovies from '../../services/api';
import defaultImage from '../Images/default.png';
import style from './Cast.module.css';

class Cast extends Component {
  state = {
    casts: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchMovies
      .getCast(movieId)
      .then(response => this.setState({ casts: response.data.cast }))
      .catch(error => console.log(error));
  }

  render() {
    const { casts } = this.state;
    return (
      <div className={style.casts}>
        {casts.length > 0 && (
          <ul className={style.list}>
            {this.state.casts.map(cast => (
              <li key={cast.id} className={style.item}>
                <img
                  className={style.imgCast}
                  src={'https://image.tmdb.org/t/p/w500' + cast.profile_path}
                  alt={cast.name}
                />
                <p className={style.nameCast}>{cast.name}</p>
                <p>Character: {cast.character}</p>
              </li>
            ))}
          </ul>
        )}
        {casts.length > 0 && (
          <h2>We don't have information about actors for this movie</h2>
        )}
      </div>
    );
  }
}
Cast.defaultProps = {
  poster_path: defaultImage,
};
export default Cast;
