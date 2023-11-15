/*
Use GlideAggregate to calculate the average priority of incidents for every assignment group

Hints:
Target the 'incident' table
Use the addAggregate method with 'AVG' and the field 'priority'.
Use the groupBy method with 'assignment_group'
agg.getDisplayValue('assignment_group') will display the name of the group
*/

// Solution

var agg = new GlideAggregate('incident');
agg.groupBy('assignment_group');
agg.addAggregate('AVG', 'priority');
agg.query();

while (agg.next()) {
  gs.info('Average priority for ' + agg.getDisplayValue('assignment_group') + ': ' + agg.getAggregate('AVG', 'priority'));
}
