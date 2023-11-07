//
// L06S03 - Pattern matching with quantifiers
//

// Moving on, let's match a series of digits using quantifiers.
var multipleDigitsPattern = /\d{4}/;

// We'll see if we can match a four-digit year in a string.
var yearString = 'The year is 2023.';
gs.info('Does the year match? ' + multipleDigitsPattern.test(yearString));

// Output: Does the year match? true
