//
// L02S01 - this example
//

// Let's start with a simple object with a method.
var myObject = {
    value: 'Hello, ServiceNow!',
    showValue: function () {
        gs.info(this.value);
    }
};

// Calling the method on the object.
myObject.showValue(); // Outputs: 'Hello, ServiceNow!'
