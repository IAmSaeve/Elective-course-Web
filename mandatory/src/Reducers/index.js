import { combineReducers } from 'redux'
import driversReducer from './driversReducer'
import raceResultsReduer from './raceResultsReduer'

export default combineReducers({ drivers: driversReducer, reaceResults: raceResultsReduer })