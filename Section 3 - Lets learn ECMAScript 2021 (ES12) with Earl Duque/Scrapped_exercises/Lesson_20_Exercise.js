/*
Convert a GlideRecord object of an incident into a standard JavaScript object.
Use Object.entries() to log each field and its value.
Modify some values and use Object.fromEntries() to convert it back to an object.
Finally, use Object.getOwnPropertyDescriptors() to inspect one of the modified properties.

Hints:
Utilize GlideRecord to fetch an incident and convert it into a JavaScript object.
Manipulate the object and its properties using the methods discussed.
*/

var incGr = new GlideRecord('incident');
incGr.query();
if (incGr.next()) {
    var incidentObj = {};
    for (var field in incGr) {
        if (incGr.isValidField(field)) {
            incidentObj[field] = incGr.getValue(field);
        }
    }

    var entries = Object.entries(incidentObj);
    entries.forEach(entry => {
        gs.info('Field: ' + entry[0] + ', Value: ' + entry[1]);
    });

    // Modifying an entry
    entries[0][1] = 'INC003';
    var modifiedIncident = Object.fromEntries(entries);

    var descriptor = Object.getOwnPropertyDescriptors(modifiedIncident);
    gs.info('Descriptor of modified property: ' + JSON.stringify(descriptor.parent, null, 4));
}