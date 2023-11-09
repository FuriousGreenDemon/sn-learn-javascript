//
// L03S01 - Exponentiation operator
//

// Calculating the square of a number using the exponentiation operator.
let base = 3;
let square = base ** 2;
gs.info('Square: ' + square);

// Equivalent operation using Math.pow().
let oldSquare = Math.pow(base, 2);
gs.info('Square (using Math.pow): ' + oldSquare);
