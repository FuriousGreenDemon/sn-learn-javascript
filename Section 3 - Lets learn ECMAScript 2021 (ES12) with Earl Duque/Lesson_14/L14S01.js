//
// L14S01 - The "name" property
//

// Named function
function myFunction() {}
gs.info('Function name: ' + myFunction.name); // Outputs: myFunction

// Anonymous function assigned to a variable
var anonymousFunction = function() {};
gs.info('Anonymous function name: ' + anonymousFunction.name); // Outputs: anonymousFunction

// the first one worked before ES2021, but the second one didn't!