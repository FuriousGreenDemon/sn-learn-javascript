/*
Write a script that accesses a nested property within a GlideRecord object, such as the name of an assigned user in an incident record.
Ensure that your script handles cases where the nested property or its parent objects might not exist.
Log the accessed property or a message indicating that it's not available.

Hints:
Query an incident record and try to access a nested property that may not be present.
Use Optional Chaining to avoid a null or undefined error.
*/

// Solution

var incGr = new GlideRecord('incident');
incGr.query();
if (incGr.next()) {
    var assignedUserName = incGr.assigned_to?.getRefRecord()?.getValue('name');
    gs.info('Assigned User Name: ' + (assignedUserName || 'Not assigned'));
}