/*
Create a template literal that generates a detailed log message for a ServiceNow incident. Include the incident's number, state, and priority.
The log message should read like: 'Incident INC0012345 is currently in the Resolved state with a priority of 1 - Critical.'
Use dummy variables for the incident details, and construct the message in a single template literal.

Hints:
Declare your variables before the template literal.
Remember to use ${} to insert these variables into your string.
*/

// Solution

function createDepartmentIdentifier(deptCode, uniqueNumber) {
    return deptCode + uniqueNumber.toString().padStart(8 - deptCode.length, '0');
}

let identifier = createDepartmentIdentifier('IT', 123);
gs.info('Department Identifier: ' + identifier); // Outputs: IT000123