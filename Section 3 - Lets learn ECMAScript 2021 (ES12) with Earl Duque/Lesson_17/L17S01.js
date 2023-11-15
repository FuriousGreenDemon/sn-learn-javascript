//
// L17S01 - Basic class structure
//

// Defining a simple class
class Incident {
    constructor(id, description) {
        this.id = id;
        this.description = description;
    }

    logDetails() {
        gs.info(`Incident ${this.id}: ${this.description}`);
    }
}

let incident = new Incident('INC001', 'Login failure');
incident.logDetails(); // Logs: Incident INC001: Login failure