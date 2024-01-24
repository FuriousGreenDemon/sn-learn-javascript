/*
You have a script that initializes an object to hold configuration settings for a ServiceNow application. Use the logical assignment operators to set default values for two properties: isEnabled (should default to true) and maxUsers (should default to 100), but only if they haven’t been set yet.

Hints:
Start with an object that may or may not have isEnabled and maxUsers properties.
Use ||= to default isEnabled to true and &&= to set maxUsers only if it already has a truthy value.
*/

// Solution

let config = { maxUsers: 50 };

config.isEnabled ||= true;
config.maxUsers &&= 100;

gs.info('Config: ' + JSON.stringify(config));
