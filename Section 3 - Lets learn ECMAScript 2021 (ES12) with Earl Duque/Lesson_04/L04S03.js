//
// L04S01 - Usefullness within deep-leveled objects
//

// Setting up an example
var customer = {
    profile: {
        comments: 'Great!',
    }
};

// Imagine accessing a deeply nested property that might not exist.
let customerFeedback = customer.profile.feedback ?? 'No feedback provided';

gs.info(customerFeedback);
