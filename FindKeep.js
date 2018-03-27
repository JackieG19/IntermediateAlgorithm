// Finders Keepers

/* 
1. create a variable to hold the arr.
2. use array.prototype.filter to look through the array, using the function as it's condition.
3. If the functions condition has been met return first occurence in the array.
4. Else return undefined. 
*/

function findElement(arr, func) {
  var num = 0;
  return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

