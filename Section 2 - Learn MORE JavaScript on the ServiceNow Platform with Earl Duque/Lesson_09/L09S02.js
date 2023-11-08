//
// L09S02 - Summing values
//

// Now, let's calculate the total downtime from all outage records.
var incidentGA = new GlideAggregate('incident');
incidentGA.addQuery('reassignment_count','!=','0');
incidentGA.addAggregate('SUM', 'reassignment_count');
incidentGA.query();

if (incidentGA.next()) {
  gs.info('Total reassignments on incidents: ' + incidentGA.getAggregate('SUM', 'reassignment_count'));
}