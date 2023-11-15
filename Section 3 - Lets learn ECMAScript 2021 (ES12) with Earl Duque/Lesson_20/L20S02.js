//
// L20S02 - Object.fromEntries()
//

// Converting entries back to an object
var incidentEntries = [['id', 'INC002'], ['status', 'Closed'], ['priority', 'Low']];
var newIncident = Object.fromEntries(incidentEntries);
gs.info('New Incident: ' + JSON.stringify(newIncident));
