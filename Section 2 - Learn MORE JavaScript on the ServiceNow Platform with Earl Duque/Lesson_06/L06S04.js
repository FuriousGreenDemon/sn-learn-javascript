//
// L06S04 - getting complex
//

// Let's start with creating a simple RegEx to match email addresses.
var emailPattern = /\S+@\S+\.\S+/;

// Now, we'll test this pattern against a string.
var testEmail = 'hello@example.com';
gs.info('Does the email match? ' + emailPattern.test(testEmail));

// Let's see what happens when we try a pattern match on a non-email string.
var notEmail = 'hello@examplecom';
gs.info('Does the non-email match? ' + emailPattern.test(notEmail));
