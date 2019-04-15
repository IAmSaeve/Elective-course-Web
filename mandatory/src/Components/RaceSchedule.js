import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRaceSchedule } from '../Actions'
import moment from 'moment';
import { DateRange } from 'moment-range';
import Dayz from 'dayz';
import '../../node_modules/dayz/dist/dayz.css';



// var t = ''
// var s = new moment('2019-03-17 ' + t.slice(0, -1))


class RaceSchedule extends Component {

    componentDidMount() {
        // console.log(this.props)
        this.props.fetchRaceSchedule()
    }

    render() {

        const relativeDate = moment()
        const EVENTS = new Dayz.EventsCollection([
            {
                content: 'A short event',
                range: new DateRange(moment.now(),
                    moment.now())
            }
        ]);

        // FIXME: This shit not working fucking undefined my ass cock sucking mother fucker
        // I am going to bed and you better be working tomorrow you fuck piece of shit!
        if (typeof this.props.races === 'undefined') {
            var s = new moment('2019-03-17 ' + this.props.races[0].time.slice(0, -1))
            console.log(s)
        }

        // console.log(this.props.races) // Debugging

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

export default connect(mapStateToProps, { fetchRaceSchedule })(RaceSchedule)