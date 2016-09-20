
/*A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
    palindrome("1 eye for of 1 eye.") will return false.
    palindrome("0_0 (: /-\ :) 0-0") will return true.
    palindrome("My age is 0, 0 si ega ym.") will return true.
*/

function palindrome(str) {
 
  str = str.toLowerCase();   
  str = str.replace(/[^a-z0-9]/gi,""); //to remove all non-alphanumeric character
  var strArray = str.split("");
  var reverseArray = strArray.reverse();
  var newString = reverseArray.join("");
  
  return str === newString;
}


palindrome("_eye"); //ans is true as this is palindrome
