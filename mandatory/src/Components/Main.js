import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import DriverList from './DriverList'
import RaceResults from './RaceResults'
import RaceSchedule from './RaceSchedule'

class Main extends Component {

  render() {
    return (
      <main>
        <div className='row mr-0'>
          <div className='col-xs-6 col'></div>
          <div className='col-xs-6 col-md-8'>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route path='/DriverList' component={DriverList}></Route>
              <Route path='/RaceResults' component={RaceResults}></Route>
              <Route path='/RaceSchedule' component={RaceSchedule}></Route>
            </Switch>
          </div>
          <div className='col-xs-6 col'></div>
        </div>
      </main>
    )
  }
}

export default Main

