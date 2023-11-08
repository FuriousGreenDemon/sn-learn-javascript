//
// L15S01 - Basic GlideQuery Usage
//

// Use GlideQuery to retrieve active incidents with high priority.
GlideQuery('incident', {
        active: true,
        priority: 1
    })
    .select('number', 'short_description')
    .forEach(function (incident) {
        gs.info('Incident ' + incident.number + ': ' + incident.short_description);
    });