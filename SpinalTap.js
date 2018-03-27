// Spinal Tap Case

function spinalCase(str) {  
  /* takes 2 arguments: 
   1A. can be a string or expression
   2A. will replace the target */
  
  //str = str.replace(/([a-z])([A-Z])/g, '$1 $2').tolowerCase();
  
/* first capture group([-]) is any lowercase letter
   second capture group([-]) is any uppercase letter
   /g option - means global, matches all of the patteren
   $1 - represents the first sub-match (the first capture group)
   $2 - represents the second sub-match (the second capture group)*/
  
  /* matches any spaces or match any underscores 
   /g - the global option, and replce it with this - */ 
  
  //return str.replace(/\s|_/g, '-');
  
  /* \s - represents a space character, |-pipe (is an or)*/
  
  return str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/[\s_-]/g, "-").toLowerCase();
}

spinalCase('This Is Spinal Tap');