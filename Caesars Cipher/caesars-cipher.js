/* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13(https://en.wikipedia.org/wiki/ROT13) cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

*/
function rot13(str) { // all the inputs should be caps

  var finalStr = "";
  
  for(var i = 0; i<str.length ;i++){
    var x = str.charCodeAt(i);
    if (x >= 65 && x <= 90){ // char coding start at 65=A and 90 = Z so igonre the rest
    x = (x <= 77) ? (x+13) : (x-13); // if char coding is <= 77 (means A to M ) add 13 else remove 13 
    }
    finalStr += String.fromCharCode(x);
  }
  
  return finalStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC"); //FREE CODE CAMP
rot13("SERR CVMMN!"); //FREE PIZZA!
