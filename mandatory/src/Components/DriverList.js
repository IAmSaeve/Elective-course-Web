import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDrivers } from '../Actions'

class DriverList extends Component {

    componentDidMount() {
        this.props.fetchDrivers()
    }

    render() {
        return (
            <div>
                <h3 className='pb-4'>F1 drivers in 2019:</h3>
                <ul style={{ listStyle: 'none' }} className='namelist pl-0'>{this.renderList()}</ul>
            </div>
        )
    }

    renderList() {
        return this.props.drivers.map(driver => {
            return (
                <li className='item' key={driver.driverId} style={{ marginBottom: 20 }}>
                    <h4 style={{ marginBottom: 0, paddingBottom: 0 }}>{driver.givenName} {driver.familyName}</h4>
                    <small>Born: {driver.dateOfBirth}, {driver.nationality}</small>
                </li>
            )
        })
    }
}

const mapStateToProps = state => {
    return { drivers: state.drivers }
}

export default connect(mapStateToProps, { fetchDrivers })(DriverList)