//
// L04S01 - Optional chaining
//

// Setting up an example
var customer = {
    profile: {
        comments: 'Great!',
    }
};

// Imagine accessing a deeply nested property that might not exist.
var customerFeedback = customer?.profile?.feedback ?? 'No feedback provided';

gs.info(customerFeedback);
