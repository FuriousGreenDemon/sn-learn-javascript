/*
I want you to demonstrate the concept of hoisting in JavaScript. Create two functions, one declared using a function declaration and the other with a function expression. Attempt to invoke both before their declaration and observe the results.

Hints:
Use function declaration for one function and function expression (assigned to a variable) for the other.
Call these functions before their respective definitions in the script.
*/

// Solution

declaredFunction(); // Works due to hoisting
expressedFunction(); // TypeError: expressedFunction is not a function

function declaredFunction() {
  gs.info('This is a function declaration.');
}

var expressedFunction = function() {
  gs.info('This is a function expression.');
};
