import React from 'react';

const MoviePoster = props => {
    console.log(props.movies[0].Poster);
    return (

        <div className="movieposter">
            <h3>Poster: </h3>
            <div> <img className="poster" alt="Poster" src={require(`./${props.movies[0].Poster}`)}></img> </div>
        </div>
    );
};

export default MoviePoster;