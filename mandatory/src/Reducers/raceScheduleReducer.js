export default (state = [], action) => {
    switch (action.type) { case 'FETCH_RACESCHEDULE': return action.payload; default: return state }
}