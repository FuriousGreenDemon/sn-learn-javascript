//
// L07S01 - Template literals
//

// Traditional string concatenation
var user = 'John Doe';
var welcomeMessage = 'Hello, ' + user + '! Welcome to ServiceNow.';
gs.info(welcomeMessage);

// Using template literals
var welcomeMessageLiteral = `Hello, ${user}! Welcome to ServiceNow.`;
gs.info(welcomeMessageLiteral);
