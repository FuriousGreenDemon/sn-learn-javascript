//
// L14S03 - More GlideQuery operations
//

// Using GlideQuery to update records.
var update = new global.GlideQuery('sys_user')
    .where('active', false)
    .where('last_name', 'Griffey')
    .updateMultiple({ active: true });

// Using GlideQuery to insert new records.
var fred = new global.GlideQuery('sys_user')
    .insert({ first_name: 'Fred', last_name: 'Luddy' })
    .get();