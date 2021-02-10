// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

//Goal - encode and decode input string by shift value
//reference ASCII table a:97 - z:122
//encode parameter default is set to true

//requirements:
//to wrap around to the front of alphabet, with each shift check where it's at in the index range,
//then shift again to the next index.
//if the end of the index is reached, restart the index and continue
//spaces and special characters should be maintained
//charCodeAt() method returns the Unicode of the character at the specified index in a string.
//String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units

//Test input validation
//1. no input
//2. no shift value
//3. input must be correct data type
//4. shift value cannot be 0 and must be between -25 and 25

//if input character is capital, use lowerCase

//Work on encoding the input
//Work on decoding the input

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (
      !input ||
      !shift ||
      typeof input !== "string" ||
      isNaN(shift) ||
      shift === 0 ||
      shift < -25 ||
      shift > 25
    ) {
      return false;
    }
    input = input.toLowerCase();
    if (encode === false) {
      shift = -shift;
    }
    let output = "";
    if (shift > 0) {
      for (let i = 0; i < input.length; i++) {
        let charCoded = input.charCodeAt(i);
        for (let j = 0; j < shift; j++) {
          if (charCoded >= 97 && charCoded < 122) {
            charCoded++;
          } else if (charCoded === 122) {
            charCoded = charCoded - 26;
            charCoded++;
          } else if (charCoded === 96) {
            charCoded = charCoded + 26;
            charCoded++;
          }
        }
        output += String.fromCharCode(charCoded);
      }
    } else if (shift < 0) {
      for (let i = 0; i < input.length; i++) {
        let charCoded = input.charCodeAt(i);
        for (let j = 0; j > shift; j--) {
          if (charCoded > 97 && charCoded <= 122) {
            charCoded--;
          } else if (charCoded === 123) {
            charCoded = charCoded - 26;
            charCoded--;
          } else if (charCoded === 97) {
            charCoded = charCoded + 26;
            charCoded--;
          }
        }
        output += String.fromCharCode(charCoded);
      }
    }
    return output;
  };

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
