//
// L17S02 - Class inheritence
//

// From L17S01
class Incident {
    constructor(id, description) {
        this.id = id;
        this.description = description;
    }

    logDetails() {
        gs.info(`Incident ${this.id}: ${this.description}`);
    }
}

// Extending a class
class SecurityIncident extends Incident {
    constructor(id, description, securityLevel) {
      super(id, description);
      this.securityLevel = securityLevel;
    }
  
    logSecurityDetails() {
      gs.info(`Security Incident ${this.id}: ${this.description}, Level: ${this.securityLevel}`);
    }
  }
  
  let secIncident = new SecurityIncident('INC002', 'Unauthorized access', 'High');
  secIncident.logSecurityDetails(); // Logs: Security Incident INC002: Unauthorized access, Level: High
  