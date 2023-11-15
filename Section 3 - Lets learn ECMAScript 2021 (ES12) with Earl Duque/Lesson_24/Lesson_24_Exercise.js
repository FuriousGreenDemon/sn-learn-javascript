/*
Create a nested array representing categories and subcategories of incidents. Use flat() to flatten this array.
Create an array of incidents where each incident has multiple work notes. Use flatMap() to create a flat array of formatted notes.
Test and log the results of both operations.

Hints:
Structure the nested categories array with multiple levels of depth.
Use a combination of mapping to format notes and then flatten the result.
*/

// Solution

// Using flat()
let categories = ['Software', ['Hardware', 'Peripheral'], ['Network', ['Internal', 'External']]];
let flattenedCategories = categories.flat(2);
gs.info('Flattened Categories: ' + flattenedCategories.join(', '));

// Using flatMap()
let incidents = [
  { id: 'INC003', notes: ['Password reset', 'User guided'] },
  { id: 'INC004', notes: ['Server downtime'] }
];

let formattedNotes = incidents.flatMap(incident => 
  incident.notes.map(note => `Incident ${incident.id} Note: ${note}`)
);
gs.info('Formatted Notes: ' + formattedNotes.join('; '));
