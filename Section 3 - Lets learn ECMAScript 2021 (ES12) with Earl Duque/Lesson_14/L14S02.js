//
// L14S02 - Practical use in ServiceNow
//

// Using the name property in a function array
var functionsArray = [function firstFunc() {}, function secondFunc() {}];

functionsArray.forEach(func => {
  gs.info('Processing function: ' + func.name);
});
