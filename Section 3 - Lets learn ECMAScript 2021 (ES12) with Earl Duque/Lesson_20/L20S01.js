//
// L20S03 - Object.getOwnPropertyDescriptors()
//

// From L20S01

let incident = {
    id: 'INC001',
    status: 'Open',
    priority: 'High'
};

// Getting property descriptors of an object
let descriptors = Object.getOwnPropertyDescriptors(incident);
gs.info('Descriptors: ' + JSON.stringify(descriptors, null, 4));
