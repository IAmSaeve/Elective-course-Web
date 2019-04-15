import { combineReducers } from 'redux'
import driversReducer from './driversReducer'
import raceResultsReduer from './raceResultsReduer'
import raceScheduleReducer from './raceScheduleReducer'

export default combineReducers({ drivers: driversReducer, raceResults: raceResultsReduer, races: raceScheduleReducer })