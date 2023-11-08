//
// L08S01 - User information
//

// Let's find out who's the current user.
var currentUser = gs.getUser();
gs.info('Current User ID: ' + currentUser.getID());
gs.info('Current User Name: ' + currentUser.getUserName());
gs.info('Current User Roles: ' + currentUser.getRoles().join(', '));