/*
Utilize GlideQuery to retrieve all incidents with a priority of '1 - Critical' and log their numbers.

Hints:

Use GlideQuery on the 'incident' table.
Apply .where to filter incidents by priority.
Iterate over the results with .forEach.
*/

// Solution

new GlideQuery('incident')
    .where('priority', 1)
    .select('number')
    .forEach(function (incident) {
        gs.info('Critical Incident: ' + incident.number);
    });