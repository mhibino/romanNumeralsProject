
// TASK: "Roman Numeral Converter"
// DESCRIPTION: Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.
// Link: http://www.freecodecamp.com/challenges/roman-numeral-converter

// SOLUTION: 

function convert(num) {   
  var result = "";
  var romans = [["I", "V", "X"], ["X", "L", "C"], ["C", "D", "M"], ["M", "<span class='overline'>V</span>", "<span class='overline'>X</span>", "<span class='overline'>M</span>"], ["<span class='overline'>X</span>", "<span class='overline'>L</span>", "<span class='overline'>C</span>"], ["<span class='overline'>C</span>", "<span class='overline'>D</span>", "<span class='overline'>M</span>"], ["<span class='overline'>M</span>"]];
  var numString = num.toString(); // 135 => '135'
  var numLength = numString.length; // '135' => 3
  var numStringRev = numString.split("").reverse().join(""); // '135' => '531'
  
  function conversions(digit) {
      if (digit == 1) {
          return romans[i][0];
      } else if (digit == 2) {
          return romans[i][0] + romans[i][0];
      } else if (digit == 3) {
          return romans[i][0] + romans[i][0] + romans[i][0];
      } else if (digit == 4) {
          return romans[i][0] + romans[i][1];
      } else if (digit == 5) {
          return romans[i][1];
      } else if (digit == 6) {
          return romans[i][1] + romans[i][0];
      } else if (digit == 7) {
          return romans[i][1] + romans[i][0] + romans[i][0];
      } else if (digit == 8) {
          return romans[i][1] + romans[i][0] + romans[i][0] + romans[i][0];
      } else if (digit == 9) {
          return romans[i][0] + romans[i][2];
      }
  }
  function altConversions(digit) {
      if (digit == 1) {
          return romans[i][0];
      } else if (digit == 2) {
          return romans[i][0] + romans[i][0];
      } else if (digit == 3) {
          return romans[i][0] + romans[i][0] + romans[i][0];
      } else if (digit == 4) {
          return romans[i][3] + romans[i][1];
      } else if (digit == 5) {
          return romans[i][1];
      } else if (digit == 6) {
          return romans[i][1] + romans[i][3];
      } else if (digit == 7) {
          return romans[i][1] + romans[i][3] + romans[i][3];
      } else if (digit == 8) {
          return romans[i][1] + romans[i][3] + romans[i][3] + romans[i][3];
      } else if (digit == 9) {
          return romans[i][3] + romans[i][2];
      }
  }
  
  for (var i = numLength - 1; i >= 0; i--) {
      if (i === 3 && numStringRev[i] > 0) {
        result += altConversions(numStringRev[i]);
      }
      else if (numStringRev[i] > 0) {
        result += conversions(numStringRev[i]);
      }
  }
  return result;
}

