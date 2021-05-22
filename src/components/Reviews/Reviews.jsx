import { Component } from 'react';
import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org';
const KEY_URL = 'be8c1fddab60d3ca36450ce7d48f58dd';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `${BASE_URL}/3/movie/${movieId}/reviews?api_key=${KEY_URL}&language=en-US&page=1`,
    );
    console.log(response.data);
    // this.setState({ ...response.data });
  }

  render() {
    return <h2>Reviews</h2>;
  }
}
export default Reviews;
