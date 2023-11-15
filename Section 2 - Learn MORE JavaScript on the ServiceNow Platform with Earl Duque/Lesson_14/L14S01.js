//
// L14S01 - Basic GlideQuery Usage
//

// Use GlideQuery to retrieve active incidents with high priority.
new GlideQuery('incident')
    .where ('active', true)
    .where ('priority', 1)
    .select('number', 'short_description')
    .forEach(function (incident) {
        gs.info('Incident ' + incident.number + ': ' + incident.short_description);
    });