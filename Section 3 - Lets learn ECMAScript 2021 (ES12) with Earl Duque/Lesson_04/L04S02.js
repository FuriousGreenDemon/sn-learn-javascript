//
// L04S02 - ServiceNow use-case
//

// Suppose we have a function that sets a greeting message.
function setGreeting() {
  let message; // Function returns a null variable
  return message;
}

// In a Script Include or Business Rule, you might get a variable that can be null or undefined.
// The nullish coalescing operator ensures that you have a valid value for further processing.
let userInput = someFunctionThatMayReturnNullOrUndefined();
let validInput = userInput ?? 'default input';

gs.info('User input is: ' + validInput);
