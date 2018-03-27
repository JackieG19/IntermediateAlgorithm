// Pig Latin

/*Check if first character of string is a vowel
If yes, Return string + “way”
If no,  loop through string to find nearest vowel
[LOOP] Is character vowel? 

If no: 
Add letter to consonants array.
Check the next letter.

If yes: 
Combine all letters in the consonants array into a string.
Remove all preceding characters before the vowel from the string.
Return the new trimmed string + consonants + “ay” */

function translatePigLatin(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  if (vowels.indexOf(str.charAt(0)) > -1) return str + "way";
  for (var i = 1; i < str.length; i++) {
    if (vowels.indexOf(str.charAt(i)) > -1) {
      str = str.slice(i) + str.slice(0, i) + "ay";
      return str;
    }
  }
}

