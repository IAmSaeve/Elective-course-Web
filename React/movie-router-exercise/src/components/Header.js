import React, { Component } from 'react';
import MovieImg from '../assets/Image/movie_black2.jpg';
import { Link } from 'react-router-dom';

class Header extends Component {


  render() {
    return (
      <div className="Header">

        <nav className="navbar navbar-expand-sm bg-dark navbar-dark pl-0">
          <Link to='/' className="nav-item nav-link">Home</Link>
          <Link to='/Admin' className="nav-item nav-link">Admin</Link>
          <Link to='/About' className="nav-item nav-link">About</Link>
          <Link to='/Login' className="nav-item nav-link">Login</Link>
        </nav>

        <div className="jumbotron">
          <h1>React-Redux-Router Movies  <img alt="Movie" className="rounded" src={MovieImg} style={{ width: 100, height: 100 }}></img></h1>
          This small React-App demonstrates the use of React-Router
        </div>

      </div>
    );
  }
}

export default Header;