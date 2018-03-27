// Diff Two Arrays

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  for(var i=0; i<arr1.length; i++){  // goes thru arr1
    if(arr2.indexOf(arr1[i])<0){  // if arr2 does not contain items in arr1
      newArr.push(arr1[i]);  // add it to new arry
    }
  }
  for(var t=0; t<arr2.length; t++){ // goes thru arr2
    if(arr1.indexOf(arr2[t])<0){ // if arr1 does not contain items in arr2
      newArr.push(arr2[t]); // add it to new arry
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);