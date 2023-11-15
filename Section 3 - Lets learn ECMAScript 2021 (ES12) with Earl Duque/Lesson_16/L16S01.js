//
// L16S01 - Shorthand properties and methods
//

var userId = 'u123';
var userName = 'John Doe';

var userObj = {
  userId,  // Shorthand property
  userName,
  logDetails() {  // Shorthand method
    gs.info(`User: ${this.userId}, Name: ${this.userName}`);
  }
};

userObj.logDetails(); // Outputs: User: u123, Name: John Doe
