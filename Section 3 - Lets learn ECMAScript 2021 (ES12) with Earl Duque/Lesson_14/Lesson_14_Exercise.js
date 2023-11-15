/*
Imagine you're writing a script in ServiceNow where you need to log the execution of various functions for debugging:

Create an array of three functions, each with a unique purpose (e.g., logging, calculating, processing).
Iterate over this array and execute each function.
As each function executes, use its name property to log a message indicating which function is currently running.

Hints:
Define each function with a descriptive name.
Use a for...in loop to iterate and invoke each function within the array.
*/

var logFunction = function logActivity() { /* ... */ };
var calculateFunction = function calculateValues() { /* ... */ };
var processFunction = function processData() { /* ... */ };

// Solution

var logFunction = function logActivity() { /* ... */ };
var calculateFunction = function calculateValues() { /* ... */ };
var processFunction = function processData() { /* ... */ };

var functionArray = [logFunction, calculateFunction, processFunction];

for (var func in functionArray){
    gs.info('Executing function: ' + functionArray[func].name);
}
