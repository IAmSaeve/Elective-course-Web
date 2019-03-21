import React, { Component } from 'react';
import About from './About';
import UnderConstruction from './UnderConstruction';
import { Switch, Route } from 'react-router-dom';
import MovieDetail from "./MovieDetail";
import Movies from './Movies';

class Main extends Component {

  render() {
    return (
      <main>
          <div className="row">
            <div className="col-1"></div>
              <div className="col-8">
          <Switch>
            <Route exact path='/' component={Movies}></Route>
            <Route path='/About' component={About}></Route>
            <Route path='/Admin' component={UnderConstruction}></Route>
            <Route path='/Login' component={UnderConstruction}></Route>
            <Route path='/MovieDetails' component={MovieDetail}></Route>
          </Switch>
        </div>
        </div>
      </main>
    );
  }
}

export default Main;

