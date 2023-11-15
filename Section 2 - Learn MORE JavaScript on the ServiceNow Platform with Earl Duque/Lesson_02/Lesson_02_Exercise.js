/*
Create a script in which you define an object named userProfile with properties name and logName. Include a method logName that logs the user's name using this. Then, outside the object, invoke this method in a different context to see how this changes.

Hints:
Define userProfile with a name property and a logName method.
Use call or apply to change the context of this when calling logName.
*/

// Solution

var userProfile = {
    name: 'John Doe',
    logName: function () {
        gs.info('User name is: ' + this.name);
    }
};

userProfile.logName(); // Correct context, logs 'John Doe'

// Bonus! Use call or apply to change the context of this when calling logName.

var anotherProfile = {
    name: 'Jane Smith'
};
userProfile.logName.call(anotherProfile); // Changed context, logs 'Jane Smith'