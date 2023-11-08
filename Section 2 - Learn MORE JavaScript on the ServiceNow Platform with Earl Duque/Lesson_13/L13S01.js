//
// L13S01 - Manipulating field values
//

// Set the value of a field.
g_form.setValue('short_description', 'This is a dynamic description');

// Get the value from a field.
var urgency = g_form.getValue('urgency');
gs.info('Current urgency: ' + urgency);
