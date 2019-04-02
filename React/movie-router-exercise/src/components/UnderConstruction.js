import React from 'react';


class UnderConstruction extends React.Component {
    render () {
        console.log("UnderConstruction");
        return <img alt="Under Construction" className="responsive rounded" src={require('../assets/Image/under-construction.gif')}></img>
    }
};


export default UnderConstruction;
