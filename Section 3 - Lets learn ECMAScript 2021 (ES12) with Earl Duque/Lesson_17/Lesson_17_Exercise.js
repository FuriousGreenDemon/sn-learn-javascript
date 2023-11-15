/*
Create a ServiceNow Script Include representing a class User with properties like name and email. Then extend this class with a subclass AdminUser that adds additional properties and methods. Demonstrate creating instances of these classes and using their methods.
*/

// Solution

// User class
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    logDetails() {
        gs.info(`User: ${this.name}, Email: ${this.email}`);
    }
}

// AdminUser class
class AdminUser extends User {
    constructor(name, email, accessLevel) {
        super(name, email);
        this.accessLevel = accessLevel;
    }

    logAdminDetails() {
        gs.info(`Admin User: ${this.name}, Access Level: ${this.accessLevel}`);
    }
}

let user = new User('John Doe', 'john.doe@example.com');
user.logDetails();

let admin = new AdminUser('Jane Smith', 'jane.smith@example.com', 'High');
admin.logAdminDetails();