//
// L03S01 - More on scope
//

// We'll start with a global variable.
var globalVar = 'I am global';

function checkScope() {
  // This is a local variable, inside a function.
  var localVar = 'I am local';

  // Let's print them out.
  gs.info(globalVar);  // Outputs: 'I am global'
  gs.info(localVar);   // Outputs: 'I am local'
}

checkScope();

// Let's see if we can access localVar outside the function.
gs.info(globalVar);  // Outputs: 'I am global'
gs.info(localVar);   // Throws an error: localVar is not defined.
