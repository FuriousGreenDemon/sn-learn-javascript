//
// L23S0 - Array.from()
//

// Creating an array from a string
let incidentString = 'INC001';
let incidentArray = Array.from(incidentString);
gs.info('Array from string: ' + incidentArray.join(', ')); // Outputs: I, N, C, 0, 0, 1

// Creating an array from a Set
let incidentSet = new Set(['INC002', 'INC003', 'INC004']);
let incidents = Array.from(incidentSet);
gs.info('Array from set: ' + incidents.join(', ')); // Outputs: INC002, INC003, INC004
