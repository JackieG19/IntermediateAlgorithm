// Convert HTML Entities

function convertHTML(str) {
  // split string into char array
  var placeHolder = str.split("");
  // goes thru char array
  for(var i=0; i<placeHolder.length; i++){
    // check current value of char
    switch(placeHolder[i]){
        // if case is met replace with html entity
      case '&':
        placeHolder[i] = '&amp;';
        break;
      case '<':
        placeHolder[i] = '&lt;';
        break;
      case '>':
        placeHolder[i] = '&gt;';
        break;
      case '"':
        placeHolder[i] = '&quot;';
        break;
      case "'":
        placeHolder[i] = '&apos;';
        break;
        
    }
  } // join char array back to into string
  str = placeHolder.join("");
  // &colon;&rpar;
  return str;
}

convertHTML("Dolce & Gabbana");