//
// L15S03 - More GlideQuery operations
//

// Using GlideQuery to update records.
GlideQuery('incident', {
        state: 'New'
    })
    .set('state', 'In Progress')
    .update()
    .then(function (response) {
        gs.info('Updated ' + response.count + ' records to In Progress.');
    })
    .catch(function (error) {
        gs.error('Error updating records: ' + error);
    });