/*
Exercise:
Create a template literal that generates a detailed log message for a ServiceNow incident. Include the incident's number, state, and priority.
The log message should read like: 'Incident INC0012345 is currently in the Resolved state with a priority of 1 - Critical.'
Use dummy variables for the incident details, and construct the message in a single template literal.

Hints:
Declare your variables before the template literal.
Remember to use ${} to insert these variables into your string.
*/

// Solution

var incidentNumber = 'INC0012345';
var incidentState = 'Resolved';
var incidentPriority = '1 - Critical';

var logMessage = `Incident ${incidentNumber} is currently in the ${incidentState} state with a priority of ${incidentPriority}.`;
gs.info(logMessage);
