/*
Utilize GlideQuery to retrieve all incidents with no assignment group and log their numbers.

Hints:

Use GlideQuery on the 'incident' table.
Apply .where to filter incidents by assignment_group.
Use NULL as your "is empty".
Iterate over the results with .forEach.
*/

// Solution

new GlideQuery('incident')
    .where('assignment_group', 'NULL')
    .select('number')
    .forEach(function (incident) {
        gs.info('No assignment group: ' + incident.number);
    });