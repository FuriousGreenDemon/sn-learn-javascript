//
// L14S02 - Evaluating scripts in records
//

// Imagine we have a script stored in a field on a sys_script record.
var scriptGR = new GlideRecord('sys_script');
scriptGR.get('name', 'Calculate Duration');
var scriptString = scriptGR.script.toString();

// Evaluate the script in the context of an incident record.
var incidentGR = new GlideRecord('incident');
incidentGR.get('sys_id', 'someSysId');
var duration = ge.evaluateScript(incidentGR, scriptString);

gs.info('The calculated duration is: ' + duration);
