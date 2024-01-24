/*
Write a script where a let variable is declared but not initialized and is used within a function that is called before the variable is initialized. Identify the Temporal Dead Zone error and modify the code to fix it.

Hints:
Declare the variable at the top of your script but don’t assign any value.
Access the variable inside a function which is called before the variable initialization line.
*/

let myVar;

function logVar() {
  gs.info(myVar);
}

logVar();
myVar = 10;

// Solution

let myVar2;

function logVar2() {
  gs.info(myVar2);
}

// Temporal Dead Zone error occurs if logVar is called here.
myVar2 = 10;
logVar2();  // Call after initialization to avoid TDZ error.
