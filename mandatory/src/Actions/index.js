import ergast from "../Apis/ergast";

export const fetchDrivers = () => async dispatch => {
    const response = await ergast.get('/api/f1/2019/drivers.json');
    dispatch({ type: 'FETCH_DRIVERS', payload: response.data.MRData.DriverTable.Drivers })
};

export const fetchRaceResults = () => async dispatch => {
    const response = await ergast.get('/api/f1/current/last/results.json');
    dispatch({ type: 'FETCH_RACERESULTS', payload: response.data.MRData.RaceTable.Races[0].Results })
};