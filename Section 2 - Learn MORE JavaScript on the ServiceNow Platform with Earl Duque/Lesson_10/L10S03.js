//
// L10S01 - Time zone conversions
//

// Convert a time to another time zone.
var gdtEST = new GlideDateTime();
gdtEST.setValue('2023-01-01T12:00:00'); // Assume this is UTC time.
gdtEST.convertTimeZone('UTC', 'America/New_York');
gs.info('Time in EST: ' + gdtEST.getDisplayValue());
