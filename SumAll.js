// Sum All Numbers in a Range

/* Input: 2-digit array, unordered number array

Output: addition of all numbers including the min number, 
and up to including the max number; return the total sum value

1. Of two numbers provided, determine lowest and highest values
2. Starting at lowest, determine all values 
   between the highest and lowest values
3. Push all values into array
4. Add all values within the array
5. Return Sum Total */

function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var total = 0;
    for (var i=min; i <= max; i++){
        total += i;
    }
  return(total);
}

sumAll([1, 4]);