/*
Create a script that checks if the current user has a specific role (e.g., 'admin') and logs a message accordingly.

Hints:
Use gs.getUser() to get the current user.
Utilize hasRole method to check for a specific role.
*/

// Solution

var currentUser = gs.getUser();
if (currentUser.hasRole('admin')) {
  gs.info('Current user is an admin.');
} else {
  gs.info('Current user is not an admin.');
}

// Just note that hasRole returns true always if this script runs for an admin user!