import { Switch, Route } from 'react-router-dom';
import React from 'react';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';


const Movies = () => (
    <Switch>
        <Route exaxt path='/' component={MovieList}/>
        <Route path='/MovieDetails/:Title' component={MovieDetail}/>
    </Switch>
)

export default Movies;