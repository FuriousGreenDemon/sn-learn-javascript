//
// L01S01 - Review of our other looping methods
//

// Start by declaring an array with some elements.
var fruits = ['Apple', 'Banana', 'Cherry'];

// for loop
for (var i = 0; i < fruits.length; i++){
    gs.info('for loop: At index ' + i + ' we have ' + fruits[i]);
}

// forEach loop
fruits.forEach(function (item, index) {
    gs.info('forEach loop: At index ' + index + ' we have ' + item);
});
