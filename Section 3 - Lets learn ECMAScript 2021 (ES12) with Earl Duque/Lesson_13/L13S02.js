//
// L13S02 - The Spread Operator
//

// Combining arrays using the Spread operator
let firstBatch = ['INC004', 'INC005'];
let secondBatch = ['INC006', 'INC007'];
let combinedBatches = [...firstBatch, ...secondBatch];
gs.info('Combined Incident IDs: ' + combinedBatches.join(', '));
