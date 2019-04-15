import React, { Component } from 'react'
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

var s = new moment('2019-03-17 05:10:00')

class RaceSchedule extends Component {
    render() {
console.log(s)
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

export default RaceSchedule