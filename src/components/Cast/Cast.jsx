import { Component } from 'react';
import fetchMovies from '../../services/api';
// import style from './Cast.module.css';

class Cast extends Component {
  state = {
    casts: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchMovies
      .getCast(movieId)
      .then(response => console.log(response))
      .catch(error => console.log(error));
    // this.setState({ casts: response.data.cast })
  }

  render() {
    // const results = 'https://image.tmdb.org/t/p/w500' + this.state.profile_path;
    return (
      <h1>CAST</h1>
      //   <div>
      //       <ul className={style.list}>
      //         <span className={style.span}>Casts</span>
      //         {this.state.casts.map(cast => (
      //           <li key={cast.id} className={style.item}>
      //             <img src={results} alt={cast.name} />
      //             {cast.name}
      //           </li>
      //         ))}
      //       </ul>
      //       {/* <p>{this.state.character}</p> */}
      //   </div>
    );
  }
}
export default Cast;
