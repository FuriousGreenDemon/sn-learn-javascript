/*
Write a function convertToIncidentArray that takes an argument and returns an array of incident IDs using Array.from(). The argument could be a string, a Set, or an array.
Use Array.of() to create an array from individual incident ID arguments and log the result.
Test your function with different types of inputs to ensure it always returns an array of incident IDs.

Hints:
Check the type of the input argument in convertToIncidentArray to handle different types.
Use Array.isArray() to check if the input is already an array.
*/

// Solution

function convertToIncidentArray(input) {
    if (Array.isArray(input)) {
        return input;
    }
    return Array.from(input);
}

let incidentsString = 'INC005';
let incidentsSet = new Set(['INC006', 'INC007']);
let incidentsArray = ['INC008', 'INC009'];

gs.info('Array from String: ' + convertToIncidentArray(incidentsString).join(', '));
gs.info('Array from Set: ' + convertToIncidentArray(incidentsSet).join(', '));
gs.info('Array from Array: ' + convertToIncidentArray(incidentsArray).join(', '));