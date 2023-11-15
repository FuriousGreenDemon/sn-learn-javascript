//
// L10S01 - matchAll()
//

// A string with repeated patterns.
let logData = 'Error: 404. Error: 500. Error: 403.';

// Using matchAll to find all error codes.
let errorPattern = /Error: (\d+)/g;
let matches = logData.matchAll(errorPattern);

// Iterating over matches to log all error codes.
for (let match of matches) {
  gs.info('Found error code: ' + match[1]);
}
