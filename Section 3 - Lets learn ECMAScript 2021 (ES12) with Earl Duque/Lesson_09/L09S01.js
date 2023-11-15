//
// L09S01 - startsWith() and endsWith()
//

// Example using startsWith
let incidentDescription = 'Error 503: Service Unavailable';
if (incidentDescription.startsWith('Error')) {
  gs.info('This is an error message.');
}

// Example using endsWith
let filename = 'report.pdf';
if (filename.endsWith('.pdf')) {
  gs.info('The file is a PDF document.');
}
