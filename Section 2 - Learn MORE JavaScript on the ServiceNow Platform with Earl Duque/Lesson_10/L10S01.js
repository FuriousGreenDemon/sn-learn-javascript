//
// L10S01 - Creating and Manipulating Dates
//

// Let's create a GlideDateTime object for the current time.
var gdtNow = new GlideDateTime();

// Add five days to the current date.
gdtNow.addDaysLocalTime(5);
gs.info('Date in 5 days: ' + gdtNow.getLocalDate().getByFormat('yyyy-MM-dd'));

// Subtract 30 minutes from the current time.
gdtNow.add(-1800000);
gs.info('Time 30 minutes ago: ' + gdtNow.getLocalTime().getByFormat('HH:mm:ss'));
