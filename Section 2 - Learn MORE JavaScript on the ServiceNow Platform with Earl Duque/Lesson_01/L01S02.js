//
// L01S02 - The for...in loop
//

// Start by declaring an array with some elements.
var fruits = ['Apple', 'Banana', 'Cherry'];

// for...in loop
for (var index in fruits) {
    // Notice, we get the index, not the value.
    gs.info('for in...loop: At index ' + index + ' we have: ' + fruits[index]);
}
