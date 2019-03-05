import React, { Component } from 'react';
import MovieImg from './assets/Image/movie_img.png';
import MOCK_MOVIES from './Shared/MockMovies';
import MovieList from './MovieList';
import MoviePoster from './MoviePoster';



class App extends Component {
  state = {movies : MOCK_MOVIES};
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1>React Movies <img alt="Movie" src={MovieImg}></img> </h1>  
           This small App demonstrates communication between child-components using Input/Output
        </div> 
        <MovieList/>
        <MoviePoster movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
