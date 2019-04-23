import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRaceSchedule } from '../Actions'
import moment from 'moment'
import { DateRange } from 'moment-range'
import Dayz from 'dayz'
import './dayz.css'

const relativeDate = moment()

class RaceSchedule extends Component {

    constructor(props) {
        super(props)
        this.state = {
            EVENTS: new Dayz.EventsCollection([])
        }
    }

    componentDidMount() {
        this.props.fetchRaceSchedule()
    }

    // This check for changes before manipulating data
    // This avoids undefined and other missing data errors
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.races !== this.props.races) {
            var e = new Dayz.EventsCollection([])

            this.props.races.forEach((race) => {
                const d = new moment(race.date + ' ' + race.time.slice(0, -1)) // Slice to remove trailing "Z"
                e.add(
                    {
                        content: race.raceName,
                        range: new DateRange(d, d)
                    }
                )
            });

            this.setState({ EVENTS: e })
        }
    }


    // FIXME: White on white CSS bug
    render() {
        return (
            <div className='container'>
                <div className='row' style={{ marginTop: '10rem' }}>
                    <div className='col p-0' style={{ borderWidth: '3px', borderColor: 'White', borderStyle: 'solid' }}>
                        <div className='p-3' style={{ height: '33rem' }}>
                            <Dayz
                                display='month'
                                date={relativeDate}
                                events={this.state.EVENTS}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { races: state.races }
}

export default connect(mapStateToProps, { fetchRaceSchedule })(RaceSchedule)