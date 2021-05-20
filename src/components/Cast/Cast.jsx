import { Component } from 'react';
import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org';
const KEY_URL = 'be8c1fddab60d3ca36450ce7d48f58dd';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `${BASE_URL}/3/movie/${movieId}/credits?api_key=${KEY_URL}>&language=en-US`,
    );
    console.log(response);
    // this.setState({ ...response.data });
  }

  render() {
    return <h2>Cast</h2>;
  }
}
export default Cast;
