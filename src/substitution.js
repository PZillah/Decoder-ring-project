// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

//rules
// Capital letters can be ignored.
// The alphabet parameter must be a string of exactly 26 characters,
// which could include special characters such as #, $, *, etc. Otherwise, it should return false.
// The input could include spaces and letters as well as special characters such as #, $, *, etc.
// All of the characters in the alphabet parameter must be unique. Otherwise, it should return false.
// Spaces should be maintained throughout.

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function checkAlphabet(alphabet) {
    if (alphabet === undefined || alphabet.length !== 26) {
      return false;
    }
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet.includes(alphabet[i], i + 1)) {
        return false;
      }
    }
    return true;
  }
  // encoding function - transpose input letter to substitution alphabet letter according to matching index
  function encodeMessage(input, alphabet) {
    const alphaObject = {                   //left side - standard alphabet, right - substitution alphabet
      'a': alphabet[0],
      'b': alphabet[1],
      'c': alphabet[2],
      'd': alphabet[3],
      'e': alphabet[4],
      'f': alphabet[5],
      'g': alphabet[6],
      'h': alphabet[7],
      'i': alphabet[8],
      'j': alphabet[9],
      'k': alphabet[10],
      'l': alphabet[11],
      'm': alphabet[12],
      'n': alphabet[13],
      'o': alphabet[14],
      'p': alphabet[15],
      'q': alphabet[16],
      'r': alphabet[17],
      's': alphabet[18],
      't': alphabet[19],
      'u': alphabet[20],
      'v': alphabet[21],
      'w': alphabet[22],
      'x': alphabet[23],
      'y': alphabet[24],
      'z': alphabet[25],
    };
    input = input.toLowerCase();
    let output = "";
    if (checkAlphabet(alphabet)) {
      for (let index in input) {
        if (input.charCodeAt(index) >= 97 && input.charCodeAt(index) <= 122) {
          let encodedLetter = alphaObject[input[index]];    // access the object value
          output += encodedLetter;
        } else {
          output += input[index];
        }
      }
      return output;
    }
  }
  // decoding function - transpose input letter to standard alphabet letter
  function decodeMessage(input, alphabet) {
    input = input.toLowerCase();
    let output = "";
    const alphabetArray = "abcdefghijklmnopqrstuvwxyz";

    if (checkAlphabet(alphabet)) {
      for (let char of input) {
        if (char === " ") {
          output += char;
        } else {
          let index = alphabet.indexOf(char);               //inside of alphabet, find index of this char
          console.log(index);
          let decodedLetter = alphabetArray[index];         // access letter of alphabet by index
          console.log(decodedLetter);
          output += decodedLetter;
        }
      }
      return output;
    }
  }

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    if (!checkAlphabet(alphabet)) return false;
    if (encode === true) {
      return encodeMessage(input, alphabet);
    } else {
      return decodeMessage(input, alphabet);
    }
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
