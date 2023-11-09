//
// L01S03 - let vs. const
//

// Use const by default, only use let if rebinding is needed.
const greeting = 'Hello, ServiceNow!';
let counter = 0;

function incrementCounter() {
  counter += 1; // 'let' allows us to rebind the counter variable.
}

// When to use var
// ...don't!