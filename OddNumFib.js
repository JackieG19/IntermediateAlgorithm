// Sum All Odd Fibonacci Numbers

function sumFibs(num) {
  //var list = sumFibs(num);
  var prevNum = 0;
  var currNum = 1;
  var total = 0;
  
  /*for(var i=0; i<list.length; i++){
    if(list[i] % 2 === 1){total += list[i];}
  }
  return total;
}*/

//function sumFibs(num){
  //if(num === 1) return[1,1];
  //var list = [1,1];
  while(currNum <= num){//(true){
    //var next = list[list.length-1] + list[list.length-2];
    if(currNum % 2 !== 0){ //(next <= num){
      //list.push(next);
      total += currNum;
    }
    //{
      //return list;
    currNum += prevNum;
    prevNum = currNum - prevNum;
    }
  return total;
  }
//}

sumFibs(4);