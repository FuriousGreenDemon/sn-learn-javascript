//
// L13S01 - the Rest Operator
//

function logIncidents(...incidentIds) {
    incidentIds.forEach(id => gs.info('Logging Incident ID: ' + id));
}

logIncidents('INC001', 'INC002', 'INC003'); // Logs each Incident ID