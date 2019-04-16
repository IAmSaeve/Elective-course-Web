import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRaceSchedule } from '../Actions'
import moment from 'moment'
import { DateRange } from 'moment-range'
import Dayz from 'dayz'
import '../../node_modules/dayz/dist/dayz.css'

const relativeDate = moment()
var EVENTS = new Dayz.EventsCollection([])

class RaceSchedule extends Component {

    constructor(props) {
        super(props)
        this.state = {
            EVENTS
        }
    }

    componentDidMount() {
        this.props.fetchRaceSchedule()
    }

    // This check for changes before manipulating data
    // This avoids undefined and other missing data errors
    componentDidUpdate() {
        this.state.EVENTS = new Dayz.EventsCollection([]) // TODO: This is bad. Use setState()
        this.props.races.forEach((race) => {
            const d = new moment(race.date + ' ' + race.time.slice(0, -1)) // Slice to remove trailing "Z"
            this.state.EVENTS.add(
                {
                    content: race.raceName,
                    range: new DateRange(d, d)
                }
            )
        });
    }

    // TODO: Find way to reload calendar so data can be shown when loaded
    // FIXME: White on white CSS bug
    // FIXME: Event text not large enough
    render() {
        return (
            <div className='container'>
            <div className='row' style={{ marginTop: '10rem' }}>
                <div className='col p-0' style={{ borderWidth: '3px', borderColor: 'White', borderStyle: 'solid'}}>
                    <div className='p-3' style={{height: '33rem'}}>
                        <Dayz
                            display='month'
                            date={relativeDate}
                            events={this.state.EVENTS}
                        />
                    </div>
                </div>
            </div>
            <div className='row d-flex justify-content-center mt-3'>
            <h4 style={{color: 'Red'}}>You temporarily have to press "Schedule" button again to see calendar data</h4>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { races: state.races }
}

export default connect(mapStateToProps, { fetchRaceSchedule })(RaceSchedule)