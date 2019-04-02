import React, { Component } from 'react';
import DriverList from './Components/DriverList';
import Head from './Components/Head';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Head></Head>
      <DriverList></DriverList>
      </div>
    );
  }
}

export default App;
