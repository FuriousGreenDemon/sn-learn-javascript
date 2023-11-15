/*
Write a script where a function receives an object representing a ServiceNow user. The function should return the user's email, but if the email property is null or undefined, it should return a default email.

Hints:
Use the nullish coalescing operator ?? to provide a fallback value.
Assume the function parameter is an object with a possibly null or undefined email property.
*/

// Solution

function getUserEmail(user) {
    return user.email ?? 'default@email.com';
}

let user = {
    name: 'John Doe',
    email: null
};
gs.info('User email: ' + getUserEmail(user));