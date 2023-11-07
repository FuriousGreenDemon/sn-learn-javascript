//
// L05S01 - Date and time
//

// Let's create a new Date object and see what we get.
var now = new Date();
gs.info('Current date and time: ' + now);

// How about getting specific parts of the date?
gs.info('The year is: ' + now.getFullYear());
gs.info('The month is: ' + (now.getMonth() + 1)); // Remember, months are zero-indexed!
gs.info('The day is: ' + now.getDate());

// You can also set specific parts of the date.
now.setFullYear(2023);
gs.info('Changed year: ' + now.getFullYear());

// And format dates into readable strings.
gs.info('Locale date string: ' + now.toLocaleDateString());
