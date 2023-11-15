//
// L22S02 - Set()
//

// Creating and using a Set
let uniqueIncidentSet = new Set();

// Adding values
uniqueIncidentSet.add('INC001');
uniqueIncidentSet.add('INC002');
uniqueIncidentSet.add('INC001'); // Duplicate, won't be added

// Checking the size and iterating over Set
gs.info('Number of unique incidents: ' + uniqueIncidentSet.size); // Outputs: 2
for (let incident of uniqueIncidentSet) {
  gs.info('Unique Incident: ' + incident);
}
