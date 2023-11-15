//
// L20S03 - Object.getOwnPropertyDescriptors()
//

// Getting property descriptors of an object
var descriptors = Object.getOwnPropertyDescriptors(incident);
gs.info('Descriptors: ' + JSON.stringify(descriptors));
