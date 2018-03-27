// DNA Pairing

/* input - string of char
  will contain only ATCG
  will only give once case
  Test cases set length, not required though

output - arry of DNA pair 
DNA pair = 2 char arry
A <.> T && C <.> G
same length as input
*/

function pairElement(str) {
   var charArray = str.split("");
   console.log(charArray);
   // var firstChar = charArray[1];
   // console.log(charArray[1]);
   var pairArray = [];
   console.log(pairArray);
   for (var i = 0; i < charArray.length; i++) {
       if (charArray[i] === "G") {
           pairArray.push(["G", "C"]);
           console.log(pairArray);
       }
       else if (charArray[i] == "C") {
           pairArray.push(["C", "G"]);
           console.log(pairArray);
       }
       else if (charArray[i] === "A") {
           pairArray.push(["A", "T"]);
           console.log(pairArray);
       }
       else if (charArray[i] === "T") {
           pairArray.push(["T", "A"]);
           console.log(pairArray);
       }
   }
   return pairArray;

  //return str;
}

pairElement("GCG");

/* input: CGG 
  output: [[G,C],[C,G],[G,C]]

1. split input arry string array
2. firstChar = inputArray[0]
3. check if firstChar is G
    create pair [G,C]
Else if firstChar is C
    create pair [C,G]
Else if firstChar is A
    create pair [A,T]
Else if firstChar is T
    create pair [T,A]
    
End it.

4. Add to strand variable
5. Repeat for additional chars
6. Return strand  */

