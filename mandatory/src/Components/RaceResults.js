import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRaceResults } from '../Actions'

class RaceRsults extends Component {
    componentDidMount() {
        console.log(this.props)
        this.props.fetchRaceResults()
    }

    renderList() {
        return this.props.reaceResults.map(result => {
            if (typeof result.Time === 'undefined') {
                // eslint-disable-next-line
                result.Time = new Object()
                result.Time.time = 'DNF'
            }
            return (
                <li className='item' key={result.position}>
                    <h4>Position: {result.position}</h4>
                    <ul>
                        <li>Name: {result.Driver.givenName} {result.Driver.familyName}</li>
                        <li>Time: {result.Time.time}</li>
                    </ul>
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <h1>Showing top 20 results</h1>
                <ul style={{ listStyle: 'none' }} className='namelist'>{this.renderList()}</ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { reaceResults: state.reaceResults }
}

export default connect(mapStateToProps, { fetchRaceResults })(RaceRsults)