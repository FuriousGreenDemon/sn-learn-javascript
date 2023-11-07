//
// L06S01 - Using .replace
//

// Let's demonstrate replacing text in a string using a RegEx pattern.
var replacePattern = /ServiceNow/g;

// We'll replace 'ServiceNow' with 'SN' in our test string.
var replaceString = 'ServiceNow is awesome. ServiceNow rocks!';
var newString = replaceString.replace(replacePattern, 'SN');
gs.info('Replaced string: ' + newString);

// Output: Replaced string: SN is awesome. SN rocks!
