//
// L12S02 - Using Default Parameters effectively
//

// More complex default parameter usage
function logMessage(message, timestamp = new Date().toISOString()) {
    gs.info(`[${timestamp}] ${message}`);
}

logMessage('User logged in'); // Timestamp is set to the current time
logMessage('User logged out', '2023-04-01T10:00:00.000Z'); // Specified timestamp is used
