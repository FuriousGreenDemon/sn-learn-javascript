//
// L04S01 - Hoisting
//

// Attempting to use a function before it's written.
hoistedFunction(); // Outputs: 'I am hoisted!'

function hoistedFunction() {
  gs.info('I am hoisted!');
}

// Now, let's try the same with a variable.
gs.info(hoistedVar); // Outputs: undefined
var hoistedVar = 'I exist!';
