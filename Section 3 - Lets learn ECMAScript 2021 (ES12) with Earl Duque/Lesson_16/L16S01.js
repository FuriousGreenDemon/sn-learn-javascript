//
// L16S01 - Shorthand properties and methods
//

let userId = 'u123';
let userName = 'John Doe';

let userObj = {
  userId,  // Shorthand property
  userName,
  logDetails() {  // Shorthand method
    gs.info(`User: ${this.userId}, Name: ${this.userName}`);
  }
};

userObj.logDetails(); // Outputs: User: u123, Name: John Doe
