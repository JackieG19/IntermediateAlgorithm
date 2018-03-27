// Wherefore art thou 

function whatIsInAName(collection, source) {
  // Where takes larger input collection and compare it with the selection needed
  var arr = collection.filter(function(item){
    // use filter and return true value
    for(var i in source){
      // check values in source and compare with item
      if(source[i]!=item[i]){
        return false;
      }
    }
    return true;
  });
  // Only change code below this line
  
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

