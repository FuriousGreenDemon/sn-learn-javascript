//
// L06S01 - Using .replace
//

// Let's demonstrate replacing text in a string using a RegEx pattern.
var replacePattern = /SN/g;

// We'll replace 'SN' with 'ServiceNow' in our test string.
var replaceString = 'SN is awesome. SN rocks!';
var newString = replaceString.replace(replacePattern, 'ServiceNow');
gs.info('Replaced string: ' + newString);

// Output: Replaced string: SN is awesome. SN rocks!
