//
// L06S01 - Simple Pattern Matching
//

// Starting with something straightforward, let's match a word in a string.
var wordPattern = /magic/;

// Check if the word "magic" is in our test string.
var testString = 'The magic of RegEx starts here.';
gs.info('Does the word match? ' + wordPattern.test(testString));

// Output: Does the word match? true
