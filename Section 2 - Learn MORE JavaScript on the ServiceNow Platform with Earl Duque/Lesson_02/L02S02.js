//
// L02S01 - calling this when it's no longer in the function's context
//

var myObject = {
    value: 'Hello, ServiceNow!',
    showValue: function () {
        gs.info(this.value);
    }
};

// Assign the function to a variable.
var outsideFunction = myObject.showValue;

// Now call it without an object context.
outsideFunction(); // Outputs: undefined
