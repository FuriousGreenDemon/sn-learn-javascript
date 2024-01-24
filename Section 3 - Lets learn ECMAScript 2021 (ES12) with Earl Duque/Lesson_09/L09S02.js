//
// L09S02 - trimStart() and trimEnd()
//

// Example using trimStart and trimEnd
let userInput = '   ServiceNow   ';
let trimmedStartInput = userInput.trimStart();
gs.info('Trimmed Input: "' + trimmedStartInput + '"');

let trimmedEndInput = userInput.trimEnd();
gs.info('Trimmed Input: "' + trimmedEndInput + '"');