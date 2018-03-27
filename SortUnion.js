// Sorted Union 

function uniteUnique(arr1, arr2, arr3) {
  var placeHolder = arr1;
  // create a duplicate array from original array
  for(var i=0; i<arguments.length; i++){
    // goes thru the length of argument
    for(var j=0; j<arguments[i].length; j++){
      // goes thru current index value of arguments
      if(placeHolder.indexOf(arguments[i][j])===-1){
      // check if array contains the value of arguments, returns -1 if it doesn't
        placeHolder.push(arguments[i][j]);
        // add it to the end of the placeholder array
      }
    }
  }
  arr1 = placeHolder;
  // set original array equal to altered array
  return arr1;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);