// Your exercise is to create a Regular Expression to match a phone number in the format (123) 456-7890. Test your RegEx with different strings to see if it accurately identifies phone numbers. 
// Hints:
// \d to find digits
// Don't forget to "escape" certain characters
// a{5} is how you would say "exactly five a's"

// Solution
var wordPattern = /\(\d{3}\) \d{3}-\d{4}/;
var testString = '(123) 456-7890';
gs.info('Does it match? ' + wordPattern.test(testString));