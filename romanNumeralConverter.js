
// TASK: "Roman Numeral Converter"
// DESCRIPTION: Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.
// Link: http://www.freecodecamp.com/challenges/roman-numeral-converter
// Link to Solution Code: https://repl.it/Bopf

// SOLUTION: 

function convert(num) {   
  var result = "";
  var romans = [["I", "V", "X"], ["X", "L", "C"], ["C", "D", "M"], ["M", "<span class='overline'>V</span>", "<span class='overline'>X</span>"], ["<span class='overline'>X</span>", "<span class='overline'>L</span>", "<span class='overline'>C</span>"], ["<span class='overline'>C</span>", "<span class='overline'>D</span>", "<span class='overline'>M</span>"], ["<span class='overline'>M</span>"]];
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
  
  for (var i = numLength - 1; i >= 0; i--) {
      if (numStringRev[i] > 0) {
          result += conversions(numStringRev[i]);
      }
  }
  return result;
}

// console.log(convert(2)); //should return "II".
// console.log(convert(3)); //should return "III".
// console.log(convert(4)); //should return "IV".
// console.log(convert(5)); //should return "V".
// console.log(convert(9)); //should return "IX".
// console.log(convert(12)); //should return "XII".
// console.log(convert(16)); //should return "XVI".
// console.log(convert(29)); //should return "XXIX".
// console.log(convert(44)); //should return "XLIV".
// console.log(convert(45)); //should return "XLV"
// console.log(convert(68)); //should return "LXVIII"
// console.log(convert(83)); //should return "LXXXIII"
// console.log(convert(97)); //should return "XCVII"
// console.log(convert(99)); //should return "XCIX"
// console.log(convert(500)); //should return "D"
// console.log(convert(501)); //should return "DI"
// console.log(convert(649)); //should return "DCXLIX"
// console.log(convert(798)); //should return "DCCXCVIII"
// console.log(convert(891)); //should return "DCCCXCI"
// console.log(convert(1000)); //should return "M"
// console.log(convert(1004)); //should return "MIV"
// console.log(convert(1006)); //should return "MVI"
// console.log(convert(1023)); //should return "MXXIII"
// console.log(convert(2014)); //should return "MMXIV"
// console.log(convert(3999)); //should return "MMMCMXCIX"
