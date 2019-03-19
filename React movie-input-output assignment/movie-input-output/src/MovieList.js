import React, { Component } from 'react';
import './MovieList.css';
import MOCK_MOVIES from './Shared/MockMovies'

class MovieList extends Component {

  MovieChange = (movie) => {
    console.log(`Setting selected movie to: ${movie.Title}`);
    this.props.OnMovieChange(movie);
  }

  render() {
    return (
      <div className="col">
        <div className="MovieList float-right">
          <div className="movie-group">
            <h2 className="ml-5">Movie list:</h2>
            <ul className="movies">
              {MOCK_MOVIES.map(movie => { return <li key={movie.Title} onClick={() => this.MovieChange(movie)}>{movie.Title}{movie.Year}</li> })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieList;
