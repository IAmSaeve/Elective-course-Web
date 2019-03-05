import React from 'react';

const MoviePoster = props => {
    return (
        <div className="movieposter">
            <h3>Poster: </h3>
            <div> <img className="poster" alt="Poster" src={require(`./${props.Poster}`)}></img> </div>
        </div>
    );
};

export default MoviePoster;