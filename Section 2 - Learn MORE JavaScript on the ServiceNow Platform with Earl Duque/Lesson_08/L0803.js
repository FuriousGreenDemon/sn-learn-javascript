//
// L08S03 - Miscellaneous methods
//

// GlideSystem also provides utility methods.
var isHoliday = gs.isHoliday();
gs.info('Is today a holiday? ' + (isHoliday ? 'Yes' : 'No'));

gs.info(gs.beginningOfLastWeek());
gs.info(gs.beginningOfNextMonth());

gs.info(gs.isLoggedIn());