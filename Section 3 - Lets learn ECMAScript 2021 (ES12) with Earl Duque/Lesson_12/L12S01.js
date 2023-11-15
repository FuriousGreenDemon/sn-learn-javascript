//
// L12S01 - Default parameters in functions
//

function createIncident(description, priority = 'Low') {
    gs.info(`Creating incident with description: ${description} and priority: ${priority}`);
}

createIncident('Login issue'); // Uses default priority 'Low'
createIncident('Server outage', 'High'); // Uses provided priority 'High'