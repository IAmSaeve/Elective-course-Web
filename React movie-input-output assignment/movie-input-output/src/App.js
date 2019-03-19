import React, { Component } from 'react';
import MovieImg from './assets/Image/movie_img.png';
import MOCK_MOVIES from './Shared/MockMovies';
import MovieList from './MovieList';
import MoviePoster from './MoviePoster';



class App extends Component {
  state = {
    movies: MOCK_MOVIES,
    selectedMovie: MOCK_MOVIES[0]
  };

  movieSelectionChanged = (movie) => {
    this.setState({ selectedMovie: movie });
  };

  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1>React Movies <img alt="Movie" src={MovieImg}></img> </h1>
          This small App demonstrates communication between child-components using Input/Output
        </div>
        <div className="container-fluid">
        <div className="row">
          <MovieList OnMovieChange={this.movieSelectionChanged} />
          <MoviePoster Poster={this.state.selectedMovie.Poster} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
