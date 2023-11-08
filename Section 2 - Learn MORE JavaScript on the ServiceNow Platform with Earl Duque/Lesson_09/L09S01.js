//
// L09S01 - Counting records
//

var incidentGR = new GlideRecord('incident');
incidentGR.addQuery('priority', '1');
incidentGR.query();

gs.info('Count of High Priority Incidents: ' + incidentGR.getRowCount());

// Let's count the number of incidents with high priority with GlideAggregate instead
var incidentGA = new GlideAggregate('incident');
incidentGA.addAggregate('COUNT');
incidentGA.addQuery('priority', '1'); // Filtering for high priority incidents.
incidentGA.query();

if (incidentGA.next()) {
  gs.info('Count of High Priority Incidents: ' + incidentGA.getAggregate('COUNT'));
}
