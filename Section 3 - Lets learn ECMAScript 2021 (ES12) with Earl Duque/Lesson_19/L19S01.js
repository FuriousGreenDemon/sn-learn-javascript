//
// L19S01 - Using optional chaining with objects
//

// Example object
let incidentRecord = {
    incident: {
        id: 'INC001',
        details: {
            description: 'Login issue',
            assignedTo: 'John Doe'
        }
    }
};

// Accessing nested properties with optional chaining
let assignedTo = incidentRecord.incident?.details?.assignedTo;
gs.info('Assigned to: ' + assignedTo); // Outputs: John Doe