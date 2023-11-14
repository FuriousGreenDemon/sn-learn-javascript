//
// L01S03 - A slight difference between this method and the others
//

// Start by declaring a couple of arrays with some elements. But add a custom property to each array
var fruits = ['Apple', 'Banana', 'Cherry'];
fruits.customProperty = 'Not_in_array'

var vegetables = ['Avocado', 'Broccoli', 'Carrot'];
vegetables.customProperty = 'Not_in_array'

// for loop
for (var i = 0; i < fruits.length; i++){
    gs.info('At index ' + i + ' we have ' + fruits[i]);
}

// for...in loop
for (var index in vegetables) {
    gs.info('At index ' + index + ' we have: ' + vegetables[index]); // the customProperty appears!
}
