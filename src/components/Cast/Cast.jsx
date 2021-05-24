import { Component } from 'react';
import axios from 'axios';
import style from './Cast.module.css';
const BASE_URL = 'https://api.themoviedb.org';
const KEY_URL = 'be8c1fddab60d3ca36450ce7d48f58dd';

class Cast extends Component {
  state = {
    casts: [],
    profile_path: null,
    character: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `${BASE_URL}/3/movie/${movieId}/credits?api_key=${KEY_URL}>&language=en-US`,
    );
    this.setState({ casts: response.data.cast });
  }

  render() {
    const results = 'https://image.tmdb.org/t/p/w500' + this.state.profile_path;
    return (
      <div>
        <>
          <ul className={style.list}>
            <span className={style.span}>Casts</span>
            {this.state.casts.map(cast => (
              <li key={cast.id} className={style.item}>
                <img src={results} alt={cast.name} />
                {cast.name}
              </li>
            ))}
          </ul>
          <p>{this.state.character}</p>
        </>
      </div>
    );
  }
}
export default Cast;
