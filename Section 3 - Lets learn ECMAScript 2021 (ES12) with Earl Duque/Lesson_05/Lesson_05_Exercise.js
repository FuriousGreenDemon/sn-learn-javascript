/*
Create a script that defines a large numeric constant representing the total number of milliseconds in a year. Use numeric separators to make the number more readable, then calculate and log how many seconds that is.

Hints:
There are 1,000 milliseconds in a second, 3,600 seconds in an hour, 24 hours in a day, and approximately 365 days in a year.
Use underscores _ as numeric separators.
*/

// Solution

const MILLISECONDS_IN_YEAR = 365 * 24 * 3_600 * 1_000;
let secondsInYear = MILLISECONDS_IN_YEAR / 1_000;
gs.info('Seconds in a year: ' + secondsInYear);
