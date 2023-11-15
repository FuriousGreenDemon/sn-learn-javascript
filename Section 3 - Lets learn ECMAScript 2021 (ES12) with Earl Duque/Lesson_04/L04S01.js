//
// L04S01 - ?? vs || Nullish Coalescing Operators
//

// Suppose we have a function that sets a greeting message.
function setGreeting(message) {
    // Using ||, an empty string or zero would be considered falsy and thus replaced by the default.
    return message || 'Hello, ServiceNow!';
}

// Using the nullish coalescing operator, only null or undefined trigger the default.
function setGreetingNullish(message) {
    return message ?? 'Hello, ServiceNow!';
}

let greeting1 = setGreeting(''); // Results in 'Hello, ServiceNow!'
let greeting2 = setGreetingNullish(''); // Results in an empty string ''
gs.info(greeting1);
gs.info(greeting2);
