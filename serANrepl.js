// Search and Replace 

function myReplace(str, before, after) {
  if(before.charAt(0)===before.charAt(0).toUpperCase()){
    // check if the first letter is capitalized
    str = str.replace(before,after.charAt(0).toUpperCase(0) + after.slice(1));
    // change after to be capitalized
  }
  else {
  str = str.replace(before,after);
    // replace before string with after string
  }
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");