const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(mode = true) {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    this.vigenerSquare = [];
    this.mode = mode;
  }

  generateVigenerSquare() {
    for ( let i = 0; i < this.alphabet.length; i++) {
      let row = this.alphabet.slice(i);
      row += this.alphabet.slice(0, i);
      this.vigenerSquare.push(row)
    }
    return this.vigenerSquare;
  }

  repeateKey(key, str) {
    let resultString = '';
    let index = 0; //index of key letter
    
    for (let i = 0; i < str.length; i++) {
  
      if (index === key.length) {
        index = 0;
      }
  
      //if str has symbol which alphabet doesn't have it retuns this symbol
      if (this.alphabet.includes(str[i]) ) {
        resultString += key[index];
        index++;
      } else {
        resultString += str[i];
      }
      
    }
    return resultString;
  }

  encrypt(message, key) {
    let encryptMessage = '';
    let repeatedKey = this.repeateKey(key, message);

    let square = this.generateVigenerSquare();

    for (let iter = 0; iter < message.length; iter++) {
      let i = this.alphabet.indexOf(message[iter]);
      let j = this.alphabet.indexOf(repeatedKey[iter]);

      if ( i === -1 ) {
        encryptMessage += message[iter];
      } else {
        encryptMessage += square[i][j];
      }
    }

    if (!this.mode) {
      return encryptMessage.split('').reverse().join('').toLocaleUpperCase();
    } else {
      return encryptMessage.toUpperCase();
    }
  }    

  decrypt(message, key) {
    let decryptMessage = '';
    let repeatedKey = this.repeateKey(key, message);

    let square = this.generateVigenerSquare();

    for (let iter = 0; iter < message.length; iter++) {
      let i = this.alphabet.indexOf(repeatedKey[iter]);
      

      if ( i === -1 ) {
        decryptMessage += message[iter];
      } else {
        let j = square[i].indexOf(message[iter]);
        decryptMessage += this.alphabet[j];
      }
    }

    if (!this.mode) {
      return decryptMessage.split('').reverse().join('').toUpperCase();
    } else {
      return decryptMessage.toUpperCase();
    }
  
  }

}

module.exports = VigenereCipheringMachine;
