//
// L18S02 - Symbols for private properties
//

const secretKey = Symbol('secretKey');
class SecretHolder {
  constructor(secret) {
    this[secretKey] = secret;
  }

  revealSecret() {
    return this[secretKey];
  }
}

let holder = new SecretHolder('MySecret');

gs.info (holder.secretKey); // Outputs: undefined
for (let i in Object.getOwnPropertyNames(Object.getPrototypeOf(holder))){
    gs.info(i + ': ' + holder[i]); //Outputs: undefined
}

gs.info(holder.revealSecret()); // Outputs: MySecret