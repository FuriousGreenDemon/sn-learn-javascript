//
// L20S02 - Object.fromEntries()
//

// Converting entries back to an object
let incidentEntries = [['id', 'INC002'], ['status', 'Closed'], ['priority', 'Low']];
let newIncident = Object.fromEntries(incidentEntries);
gs.info('New Incident: ' + JSON.stringify(newIncident));
