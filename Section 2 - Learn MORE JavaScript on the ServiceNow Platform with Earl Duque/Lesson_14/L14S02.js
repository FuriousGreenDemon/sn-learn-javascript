//
// L14S02 - GlideQuery with conditions and sorting
//

// Fetching incidents and sorting by creation date.
new GlideQuery('incident')
    .where('active', true)
    .where('priority', '>', 2)
    .orderBy('sys_created_on')
    .limit(10)
    .select('number', 'sys_created_on')
    .forEach(function (incident) {
        gs.info('Incident ' + incident.number + ' created on: ' + incident.sys_created_on);
    })