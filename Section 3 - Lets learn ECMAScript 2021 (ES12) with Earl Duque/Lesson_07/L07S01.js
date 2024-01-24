//
// L07S01 - Template literals
//

// Traditional string concatenation
let user = 'John Doe';
let welcomeMessage = 'Hello, ' + user + '! Welcome to ServiceNow.';
gs.info(welcomeMessage);

// Using template literals
let welcomeMessageLiteral = `Hello, ${user}! Welcome to ServiceNow.`;
gs.info(welcomeMessageLiteral);
