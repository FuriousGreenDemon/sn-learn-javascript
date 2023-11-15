//
// L24S02 - flatMap()
//

// Combining mapping and flattening with flatMap()
let incidentArray = [{
        id: 'INC001',
        notes: ['Login issue', 'User cannot access']
    },
    {
        id: 'INC002',
        notes: ['Email issue']
    }
];

let notes = incidentArray.flatMap(incident => incident.notes.map(note => `Note: ${note}`));
gs.info('All Notes: ' + notes.join('; ')); // Outputs: Note: Login issue; Note: User cannot access; Note: Email issue