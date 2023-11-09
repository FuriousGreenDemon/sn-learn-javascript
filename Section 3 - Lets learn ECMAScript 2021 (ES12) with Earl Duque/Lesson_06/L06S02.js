//
// L06S02 - Logical assignment operator &&=
//

// Consider a scenario where we want to append text to a string if it already has a value.
let statusMessage = 'Processing';

// Using &&= to append only if statusMessage is truthy.
statusMessage &&= statusMessage + ', please wait...';
gs.info(statusMessage); // Outputs: 'Processing, please wait...'
