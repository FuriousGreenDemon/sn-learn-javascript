//
// L15S02 - GlideQuery with conditions and sorting
//

// Fetching incidents and sorting by creation date.
GlideQuery('incident', {
        active: true
    })
    .where('priority', '>', 2)
    .orderBy('sys_created_on')
    .limit(10)
    .select('number', 'sys_created_on')
    .then(function (incidents) {
        incidents.forEach(function (incident) {
            gs.info('Incident ' + incident.number + ' created on: ' + incident.sys_created_on);
        });
    });