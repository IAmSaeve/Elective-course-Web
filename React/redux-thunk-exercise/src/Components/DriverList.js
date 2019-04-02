import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDrivers } from "../Actions";

class DriverList extends Component {
    componentDidMount() {
        this.props.fetchDrivers();
    };

    renderList() {
        return this.props.drivers.map(driver => {
            return (
                <li className='item' key={driver.driverId} style={{marginBottom: 20}}>
                    <h4 style={{marginBottom: 0, paddingBottom: 0}}>{driver.givenName} {driver.familyName}</h4>
                    <small>Born: {driver.dateOfBirth}, {driver.nationality}</small>
                </li>
            )
        })
    };

    render() {
        return (
            <div className='row'>
                <div className='col-1'>
                </div>
                <div className='col-4'>
                    <h1>F1 drivers in 2019:</h1>
                    <ul style={{listStyle: "none"}} className='namelist'>{this.renderList()}</ul>
                </div>
                <div className='col-7'></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { drivers: state.drivers };
}

export default connect(mapStateToProps, {fetchDrivers})(DriverList);