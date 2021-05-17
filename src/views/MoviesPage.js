import React, { Component } from 'react';
// import axios from 'axios';

// const BASE_URL = 'https://api.themoviedb.org';
// const KEY_URL = 'be8c1fddab60d3ca36450ce7d48f58dd';
class MoviesPage extends Component {
  state = {
    search: [],
  };

  // async componentDidMount() {
  //   const response = await axios.get(
  //     `${BASE_URL}/3/search/movie?api_key=${KEY_URL}&language=en-US&page=1&include_adult=false`,
  //   );
  //   console.log(response);
  // }
  render() {
    return <h2>Это поиск фильма по кючевому слову</h2>;
  }
}

export default MoviesPage;
