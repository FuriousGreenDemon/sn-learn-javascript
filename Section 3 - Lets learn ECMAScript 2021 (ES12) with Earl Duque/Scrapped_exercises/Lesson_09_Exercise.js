/*
Consider a scenario where you're processing user-generated content in ServiceNow:

You receive a string of text input, which might have extraneous whitespace at the beginning or end and could start with a timestamp.
Write a script that checks if the input starts with a the string `Start`. If it does, log 'Start found'. Then, remove any extra whitespace from the start and end of the string.
Validate your script with different inputs.

Hints:
Use startsWith() to see if the keyword is at the start of the string.
Use trimStart() and trimEnd() to remove unnecessary whitespace.
*/

// Solution

function processInput(input) {
    let inputCheck = 'Start';
    if (input.startsWith(inputCheck)) {
        gs.info('Start found');
    } else if (input.includes(inputCheck)){
        gs.info('Start found but not at beginning');
    } else {
        gs.info('Start not found');
    }

    let trimmedInput = input.trimStart().trimEnd();
    gs.info('Processed Input: "' + trimmedInput + '"');
}

processInput('   Start Report   ');
