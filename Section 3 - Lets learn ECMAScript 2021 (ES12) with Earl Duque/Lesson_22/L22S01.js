//
// L22S01 - Map()
//

// Creating and using a Map
let incidentMap = new Map();

// Adding key-value pairs
incidentMap.set('INC001', 'Login issue');
incidentMap.set('INC002', 'Email not working');

// Retrieving a value
gs.info('INC001 Description: ' + incidentMap.get('INC001')); // Outputs: Login issue

// Iterating over Map entries
incidentMap.forEach((value, key) => {
  gs.info(`Incident ${key}: ${value}`);
});
