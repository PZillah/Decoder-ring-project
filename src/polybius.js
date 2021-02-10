// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

//NOTES
//When decoding, the number of characters in the string
//excluding spaces should be even. Otherwise, return false.
//when encoding, ignore the number of characters.
//maintain spaces
//ignore capital letters
//The letters "I" and "J" share a space. When encoding, both letters can be
//converted to 42, but when decoding, both letters should somehow be shown.

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const alphabetArray = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "ij", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"],
  ];
  //encoding function - turn letters to numbers
  function encodeMessage(input) {
    input = input.toLowerCase();
    let columnIndex;
    let rowIndex;
    let output = "";
    for (let i = 0; i < input.length; i++) {
      //loop over character of each letter
      let character = input[i];
      for (let j = 0; j < alphabetArray.length; j++) {
        //loop thru the row of sub array
        columnIndex = alphabetArray[j].findIndex(
          (element) => element === character || element.includes(character)
        );
        if (columnIndex !== -1) {
          rowIndex = j;
          break;
        }
      }
      if (columnIndex === -1) {
        output += " "; //convert to a space
      } else {
        output += "" + (columnIndex + 1) + (rowIndex + 1);
      }
    }
    return output;
  }

  //decoding function - turn numbers to letters
  function decodeMessage(input) {
    let columnIndex;
    let rowIndex;
    let output = "";
    let isColumn = true;
    let numCount = 0;
    //loop over input
    for (let i = 0; i < input.length; i++) {
      if (!isNaN(parseInt(input[i]))) {
        numCount += 1;
      }
    }
    if (numCount % 2 === 1) {
      return false;
    }
    for (let i = 0; i < input.length; i++) {
      if (isColumn) {
        if (input[i] === " ") {
          output += " ";
        } else {
          columnIndex = parseInt(input[i]) - 1;
          console.log(columnIndex);
          isColumn = false;
        }
      } else {
        rowIndex = parseInt(input[i]) - 1;
        isColumn = true;
        let letter = alphabetArray[rowIndex][columnIndex];
        if (letter === "ij") {
          output += "(i/j)";
        } else {
          output += letter;
        }
      }
    }
    return output;
  }

  function polybius(input, encode = true) {
    if (encode === true) {
      return encodeMessage(input);
    } else {
      return decodeMessage(input);
    }
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
