//
// L19S02 - Optional chaining with function calls
//

// Object with a method
var user = {
    profile: {
        getName: function () {
            return 'Jane Smith';
        }
    }
};

// Safely calling a method
var userName = user.profile?.getName?.();
gs.info('User name: ' + userName); // Outputs: Jane Smith