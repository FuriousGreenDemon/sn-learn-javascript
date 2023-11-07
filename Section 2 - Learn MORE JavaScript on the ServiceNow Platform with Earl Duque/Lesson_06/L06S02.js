//
// L06S02 - Using special characters
//

// Now, let's use special characters to match any one-digit number.
var digitPattern = /\d/;

// Let's test this pattern against a string containing numbers.
var stringWithNumbers = 'ServiceNow 2023';
gs.info('Is there a digit? ' + digitPattern.test(stringWithNumbers));

// Output: Is there a digit? true
