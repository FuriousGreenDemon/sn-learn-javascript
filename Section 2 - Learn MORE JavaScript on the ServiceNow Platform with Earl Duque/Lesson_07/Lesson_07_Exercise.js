/*
Create a namespace for a mock ServiceNow application. The namespace should include a version property, an init function, and a sub-namespace for utilities with a couple of utility functions. Demonstrate calling one of the utility functions from the namespace.

Hints:
Define a global object for your namespace.
Include nested objects and functions within this namespace.
Access the functions using the namespace.
*/

// Solution

var MySNApp = {
    version: '1.0',
    init: function () {
        gs.info('Initializing MySNApp version ' + this.version);
    },
    utils: {
        log: function (message) {
            gs.info('MySNApp log: ' + message);
        },
        calculate: function (a, b) {
            return a + b;
        }
    }
};

MySNApp.init();
MySNApp.utils.log('Hello, ServiceNow');