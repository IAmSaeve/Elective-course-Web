import React from 'react';

const MoviePoster = props => {
    return (
        <div className="col">
            <div className="movieposter float-left">
                <h3>Poster: </h3>
                <div> <img className="poster" alt="Poster" src={require(`./${props.Poster}`)}></img> </div>
            </div>
        </div>
    );
};

export default MoviePoster;