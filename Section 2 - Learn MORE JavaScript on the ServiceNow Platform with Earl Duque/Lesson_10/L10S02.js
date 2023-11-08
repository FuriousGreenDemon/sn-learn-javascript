//
// L10S01 - Comparing dates
//

// Compare two dates to see which is later.
var gdtStart = new GlideDateTime('2023-01-01T08:30:00');
var gdtEnd = new GlideDateTime('2023-01-01T09:45:00');

if (gdtStart.before(gdtEnd)) {
  gs.info('Start time is before end time.');
}
