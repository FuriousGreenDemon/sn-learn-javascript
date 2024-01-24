/*
Let's try utilizing a map with an arrow function (this happens a lot in JavaScript, and you'll see it often on stackexchange!)

Create a function named "convertToUpperCase" that takes an array of strings.
Use the map method along with an arrow function to create a new array where each string is converted to uppercase.

Hints:
- Use the map method to iterate over the array and transform each element.
- Inside the map, use an arrow function to return the uppercase version of each string.
- Remember that strings have a toUpperCase() method.
*/

// Solution

function convertToUpperCase(strings) {
    return strings.map(string => string.toUpperCase());
}

// Example usage
gs.info(convertToUpperCase(['hello', 'world'])); // Outputs: HELLO,WORLD
