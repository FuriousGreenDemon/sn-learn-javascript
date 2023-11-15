//
// L24S01 - flat()
//

// Flattening nested arrays with flat()
let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flatArray = nestedArray.flat(2);
gs.info('Flattened Array: ' + flatArray.join(', ')); // Outputs: 1, 2, 3, 4, 5, 6
