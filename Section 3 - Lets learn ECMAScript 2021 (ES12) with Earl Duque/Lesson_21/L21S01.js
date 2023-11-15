//
// L21S01 - for...of loops on arrays (vs. for...in)
//

let incidentIds = ['INC001', 'INC002', 'INC003'];

// Reminder of for...in
for (let id in incidentIds) {
    gs.info('Processing Incident: ' + incidentIds[id]);
}

// Iterating over an array with for...of
for (let id of incidentIds) {
  gs.info('Processing Incident: ' + id);
}
