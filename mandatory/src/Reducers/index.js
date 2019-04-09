import { combineReducers } from 'redux';
import driversReducer from "./driversReducer";
export default combineReducers({ drivers: driversReducer });