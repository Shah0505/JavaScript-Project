"use strict"
//function to reverse a string

function reverseString(str) {
  var strArray = str.split("");
  var reverseArray = strArray.reverse();
  str = reverseArray.join("");
  return str;
}

var ans = reverseString("hello");
console.log(ans); //olleh