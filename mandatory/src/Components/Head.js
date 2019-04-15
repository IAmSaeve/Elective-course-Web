import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <nav className='navbar navbar-expand-lg navbar-dark bg-primary pl-0'>
                    <div className='collapse navbar-collapse' id='navbarColor01'>
                        <Link to='/' className='nav-item nav-link btn btn-outline-success ml-1'>Home</Link>
                        <Link to='/DriverList' className='nav-item nav-link btn btn-outline-success ml-3'>DriverList</Link>
                        <Link to='/RaceResults' className='nav-item nav-link btn btn-outline-success ml-3'>RaceResults</Link>
                        <Link to='/RaceSchedule' className='nav-item nav-link btn btn-outline-success ml-3'>RaceSchedule</Link>
                        <Link to='/LapTimes' className='nav-item nav-link btn btn-outline-success ml-3'>LapTimes</Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header