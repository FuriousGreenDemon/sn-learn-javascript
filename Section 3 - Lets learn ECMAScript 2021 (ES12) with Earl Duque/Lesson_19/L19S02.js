//
// L19S02 - Optional chaining with function calls
//

// Object with a method
let user = {
    profile: {
        getName: function () {
            return 'Jane Smith';
        }
    }
};

// Safely calling a method
let userName = user.profile?.getName?.();
gs.info('User name: ' + userName); // Outputs: Jane Smith