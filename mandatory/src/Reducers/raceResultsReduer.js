export default (state = [], action) => {
    switch (action.type) { case 'FETCH_RACERESULTS': return action.payload; default: return state; }
};