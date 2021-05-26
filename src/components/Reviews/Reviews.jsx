import { Component } from 'react';
import fetchMovies from '../../services/api';
import style from './Reviews.module.css';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchMovies
      .getReviews(movieId)
      .then(response => this.setState({ reviews: response.data.results }))
      .catch(error => console.log(error));
    // this.setState({ reviews: response.data.results });
  }

  render() {
    const { reviews } = this.state;
    return (
      <ul className={style.list}>
        {reviews.map(reviews => (
          <li key={reviews.id} className={style.item}>
            Author: {reviews.author}
            <p>{reviews.content}</p>
          </li>
        ))}
      </ul>
    );
  }
}
export default Reviews;
