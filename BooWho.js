// Boo who

/* input - string, numbers, special characters, or boolean primitive.
output - true or false
1. look at the input.
2. if input if === to true or false, return true
3. if input is !=== to true or false, return false
*/

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if(bool === true || bool === false){
    
    return true;
  }
  else{
    return false;
  }
  return bool;
}

booWho(null);