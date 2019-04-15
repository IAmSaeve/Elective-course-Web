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
                <div className='card card-body m-3' key={result.position}>
                    <div className='text-wrap' style={{width: '150px'}}>
                        <h5>Position: {result.position}</h5>
                        <hr style={{borderWidth: '2px', borderColor: 'White'}}></hr>
                        {/* TODO: Make the driver a clickable link to a driver profile */}
                        <p><b>Name:</b> {result.Driver.givenName} {result.Driver.familyName}</p>
                        {/* TODO: Make the time variable go red of driver DNF */}
                        <p><b>Time:</b> {result.Time.time}</p>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="d-flex align-content-around flex-wrap">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { reaceResults: state.reaceResults }
}

export default connect(mapStateToProps, { fetchRaceResults })(RaceRsults)