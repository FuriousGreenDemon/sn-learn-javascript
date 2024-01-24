/*
Imagine you're analyzing a text field from incident records in ServiceNow, looking for specific keywords to categorize the incident. Your task is to:

Write a function that takes an incident description as input.
Use includes() to check for keywords like 'crash', 'slow', or 'unavailable' and categorize the incident based on these.
Additionally, use matchAll() to extract any error codes formatted like 'E123' and log them.

Hints:
Combine includes() with conditional statements.
You can use the regular expression /E(\d+)/g to match the error code pattern and use matchAll().
Print a gs.info() log instead of actually categorizing something.
*/

// Solution

function categorizeIncident(description) {
    if (description.includes('crash')) {
        gs.info('Category: Crash Issue');
    } else if (description.includes('slow')) {
        gs.info('Category: Performance Issue');
    } else if (description.includes('unavailable')) {
        gs.info('Category: Availability Issue');
    }

    let errorCodePattern = /E(\d+)/g;
    let matches = description.matchAll(errorCodePattern);
    for (let match of matches) {
        gs.info('Extracted error code: ' + match[1]);
    }
}

// Example use
categorizeIncident('System crash observed. Errors: E404, E500.');