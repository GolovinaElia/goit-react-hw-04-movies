import { Component } from 'react';
import fetchMovies from '../../services/api';
import style from './Reviews.module.css';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchMovies
      .getReviews(movieId)
      .then(response => this.setState({ reviews: response.data.results }))
      .catch(error => console.log(error));
  }

  render() {
    const { reviews } = this.state;
    return (
      <div className={style.reviews}>
        {reviews.length > 0 && (
          <ul className={style.list}>
            {reviews.map(reviews => (
              <li className={style.item} key={reviews.id}>
                <span className={style.span}>Author: {reviews.author}</span>

                <p className={style.content}>{reviews.content}</p>
              </li>
            ))}
          </ul>
        )}
        {reviews.length === 0 && (
          <h2>We don't have any reviews for this movie</h2>
        )}
      </div>
    );
  }
}
export default Reviews;
