/*
I'm going to give you a script include (don't worry, it can run in a background script). Change the arrow function to display the given Task ID and Description. Bonus points for using template literals!

Hints:
The only edit needed is on the `const formatDetails = () => '';` line
The output should look like "Task ID: 123, Description: Complete documentation"
*/

var Task = Class.create();
Task.prototype = {
  initialize: function(id, description) {
    this.id = id;
    this.description = description;
  },

  logDetails: function() {
    const formatDetails = () => '';
    gs.info(formatDetails());
  }
};

var myTask = new Task('123', 'Complete documentation');
myTask.logDetails();

// Solution

var Task = Class.create();
Task.prototype = {
  initialize: function(id, description) {
    this.id = id;
    this.description = description;
  },

  logDetails: function() {
    const formatDetails = () => `Task ID: ${this.id}, Description: ${this.description}`;
    gs.info(formatDetails());
  }
};

var myTask = new Task('123', 'Complete documentation');
myTask.logDetails(); // Outputs: Task ID: 123, Description: Complete documentation
