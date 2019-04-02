import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieList.css';
import { selectMovie } from '../actions';
import { Link } from 'react-router-dom';

class MovieList extends Component {

  render() {
    return (
      <div className="MovieList">
        <div className="movie-group">
          <h2>Movie list:</h2>
          <ul className="movies">
            {this.props.movies.map(movie => {
              return <Link to={`/MovieDetails/${movie.Title}`}><li key={movie.Title} onClick={() => this.props.selectMovie(movie)}>
                {movie.Title}    {movie.Year}
              </li></Link>
            })
            }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { movies: state.movies };
}

//Dette er standard metoden til at hente data fra vores redux store til komponenten

export default connect(mapStateToProps, { selectMovie })(MovieList);

