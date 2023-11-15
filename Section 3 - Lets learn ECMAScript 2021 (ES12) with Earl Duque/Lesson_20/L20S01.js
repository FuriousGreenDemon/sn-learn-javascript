//
// L20S03 - Object.getOwnPropertyDescriptors()
//

// From L20S01

var incident = {
    id: 'INC001',
    status: 'Open',
    priority: 'High'
};

// Getting property descriptors of an object
var descriptors = Object.getOwnPropertyDescriptors(incident);
gs.info('Descriptors: ' + JSON.stringify(descriptors, null, 4));
