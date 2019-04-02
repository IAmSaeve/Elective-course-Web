import React from 'react';
import ReactDOM from 'react-dom';

//Create a react component
const App = () => {
    const helloText = 'Hej Verden!'
    return <div><h1 style={{ color: '#ff8a65', backgroundColor: '#2196f3'}}>{helloText}</h1></div>;
    };
    //Take the react component and show it on the screen
    ReactDOM.render(<App />, document.getElementById('root'));