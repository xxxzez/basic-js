class VigenereCipheringMachine {

    constructor(name){
        this.name = name;
    }

    encrypt(message, key) {
        if(typeof (arguments[0]) !== 'string' || typeof (arguments[1]) !== 'string') throw Error;    
        return message;
    }

    decrypt(encryptedMessage, key) {
        if(typeof (arguments[0]) !== 'string' || typeof (arguments[1]) !== 'string') throw Error;    
        
        return encryptedMessage;
    }
}

module.exports = VigenereCipheringMachine;
