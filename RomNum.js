// Roman Numeral Converter

function convertToRoman(num) {
  var roman = ""; // create an empty string
  var romNum = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]; // // create an array of possible rN up to 1000
  var value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  // create an array of possible number values
  for(var i=0; i<value.length; i++){ 
  // goes thru the length of the number array
    while(num>=value[i]){
      // while original number is larger than input number array
      roman = roman + romNum[i]; // adds rN to the empty string
      num = num - value[i]; 
      // substract the value from original number to end loop
    }
  }
 return roman;
}

convertToRoman(36);