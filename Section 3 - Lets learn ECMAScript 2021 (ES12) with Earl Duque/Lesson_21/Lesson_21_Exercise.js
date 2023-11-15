/*
Create a function logWorkNotes that takes an array of work notes (strings).
Iterate over this array using a for...of loop and log each note.
Additionally, include a counter to indicate the note's position in the array.

Hints:
Use a variable to keep track of the current index.
Use template literals for logging to include the index and note.
*/

// Solution

function logWorkNotes(notes) {
    let index = 1;
    for (let note of notes) {
        gs.info(`Note ${index}: ${note}`);
        index++;
    }
}

logWorkNotes(['Hello1', 'Hello2', 'Hello3']);