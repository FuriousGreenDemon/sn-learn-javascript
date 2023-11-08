//
// L14S01 - Basic GlideEvaluator usage
//

// Let's create a script string that calculates the sum of two numbers.
var script = 'var sum = arguments[0] + arguments[1]; sum;';

// Now, we'll use GlideEvaluator to run this script.
var ge = new GlideEvaluator();
var result = ge.evaluateScript(g_scratchpad, script, [5, 7]);

gs.info('The sum is: ' + result);
