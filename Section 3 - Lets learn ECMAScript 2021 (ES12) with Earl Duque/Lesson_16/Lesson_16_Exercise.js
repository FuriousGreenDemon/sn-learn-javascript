/*
Let's apply these enhancements in a ServiceNow context:
Create an object incidentReporter that includes properties incidentId, description, and a method reportIncident.
Use shorthand properties to initialize incidentId and description from existing variables.
Implement reportIncident as a shorthand method that logs the incident details.
Add a computed property based on a string 'isStatus' which is set to 'Open'.
*/

var incidentId = 'INC001';
var description = 'Login issue';

var incidentReporter = {
    // your code here!
};

// Solution

var incidentId = 'INC001';
var description = 'Login issue';

var incidentReporter = {
  incidentId,
  description,
  reportIncident() {
    gs.info(`Reporting Incident: ${this.incidentId}, Description: ${this.description}`);
  },
  ['is' + 'Status']: 'Open'
};

incidentReporter.reportIncident(); // Outputs: Reporting Incident: INC001, Description: Login issue
gs.info('Incident Status: ' + incidentReporter.isStatus); // Outputs: Incident Status: Open
