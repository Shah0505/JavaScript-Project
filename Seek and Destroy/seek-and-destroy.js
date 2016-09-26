/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. 

 for info about argument object vistit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments */
function destroyer(arr) {
  
  var x = arguments[1];
  var y = arguments[2];
  var z = arguments[3];
  var finalArray = arr.filter(function(val){
   return  val !=x && val !=y && val != z;
 });
  
  return finalArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // [1,1]
destroyer([2, 3, 2, 3], 2, 3); //[]
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); //[1,5,1]