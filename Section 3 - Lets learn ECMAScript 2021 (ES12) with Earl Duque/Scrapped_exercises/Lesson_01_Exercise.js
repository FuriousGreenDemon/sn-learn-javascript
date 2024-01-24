/*
Create a script that defines a constant representing the maximum number of users allowed on a ServiceNow instance. Then, use a let variable to track the current number of users and increment it until it reaches the maximum. Log an alert when the maximum is reached.

Hints:
Initialize the constant with a value like 100.
Use a loop to increment the current user count.
Compare the current user count with the maximum in each iteration.
*/

// Solution

const MAX_USERS = 100;
let currentUserCount = 0;

while (currentUserCount < MAX_USERS) {
  currentUserCount++;
}

gs.info('Maximum user count of ' + MAX_USERS + ' reached');
