//
// L02S01 - The temporal Dead Zone (TDZ)
//

// Trying to access a var-declared variable before it's defined.
gs.info(beforeVar); //undefined
var beforeVar = 'I\'m on my way!';
gs.info(beforeVar);

// Outside of ServiceNow, this is supposed to be an error
gs.info(beforeLet); // ReferenceError: Cannot access 'beforeLet' before initialization
let beforeLet = 'I am in the TDZ until this line!';

// The Temporal Dead Zone, as of the making of this lesson, is not supported in ServiceNow, so you shouldn't run into this. But it's important to know in case you encounter this outside of ServiceNow, like if you're scripting in VS Code.