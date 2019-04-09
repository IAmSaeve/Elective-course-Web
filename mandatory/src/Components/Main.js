import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import DriverList from "./DriverList";
import Home from "./Home";

class Main extends Component {

  render() {
    return (
      <main>
        <div className="row mr-0">
          <div className="col-1"></div>
          <div className="col-8">
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route path='/DriverList' component={DriverList}></Route>
            </Switch>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;

