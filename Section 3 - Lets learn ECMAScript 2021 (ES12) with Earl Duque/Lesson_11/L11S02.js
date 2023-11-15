//
// L11S02 - Arrow Functions in object methods and how it interacts with `this`
//

var user = {
    name: 'John Doe',
    logName: () => {
        gs.info(this.name); // 'this' refers to the global object, not 'user'
    }
};
user.logName(); // Outputs: undefined