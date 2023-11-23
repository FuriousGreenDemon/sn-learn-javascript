/*
Create an array of 4 strings, and then set a custom property for that array. The goal is to have it display each string on separate line using a loop. Run a `forEach` loop on that array, a three expressions `for` loop on the same array, and then a `for...in` loop on that array to make sure you see the key difference. What is the difference on the last loop syntax? Let me know in the comments which way you prefer now that you know three different ways to do it.
*/

// Solution

var advocates = ['Chuck', 'Earl', 'Lauren', `Pranav`];
vegetables.title = 'Developer Advocates'

advocates.forEach(function (item, index) {
    gs.info(index + '. ' + item);
})

for (var i = 0; i < advocates.length; i++){
    gs.info(i + '. ' + advocates[i])
}

for (var i in advocates){
    gs.info(i + '. ' + advocates[i]);
}

// The difference is that the `for...in` loop also displays the custom preoprty, but the other two loops do not.