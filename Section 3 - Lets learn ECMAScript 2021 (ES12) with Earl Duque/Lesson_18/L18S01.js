//
// L18S01 - Creating and using Symbols
//

// Creating a Symbol
let mySymbol = Symbol('my unique symbol');

// Using Symbol as a property key
let myObject = {
  [mySymbol]: 'Symbol Value'
};

gs.info(myObject[mySymbol]); // Outputs: Symbol Value
