//
// L09S03 - Grouping results
//

// How about grouping the number of incidents by category?
var incidentGA = new GlideAggregate('incident');
incidentGA.addAggregate('COUNT');
incidentGA.groupBy('category');
incidentGA.query();

while (incidentGA.next()) {
  gs.info('Category: ' + incidentGA.category + ' - Count: ' + incidentGA.getAggregate('COUNT'));
}
