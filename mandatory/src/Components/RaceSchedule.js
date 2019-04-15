import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRaceSchedule } from '../Actions'
import moment from 'moment';
import { DateRange } from 'moment-range';
import Dayz from 'dayz';
import '../../node_modules/dayz/dist/dayz.css';

const EVENTS = new Dayz.EventsCollection([
    {
        content: 'A short event',
        range: new DateRange(moment.now(),
            moment.now())
    }
]);

const relativeDate = moment()
var t = '05:10:00Z'
var s = new moment('2019-03-17 ' + t.slice(0, -1))

class RaceSchedule extends Component {

    componentDidMount() {
        console.log(this.props)
        this.props.fetchRaceSchedule()
    }

    render() {
        // console.log(s) // Debugging
        console.log(this.props)
        return (
            <div className='row' style={{ marginTop: '15rem' }}>
                <div className='col' style={{ borderWidth: '3px', borderColor: 'White', borderStyle: 'solid' }}>
                    <div className='p-3'>
                        <Dayz
                            display='month'
                            date={relativeDate}
                            events={EVENTS}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { races: state.races }
}

export default connect(mapStateToProps, { fetchRaceSchedule})(RaceSchedule)