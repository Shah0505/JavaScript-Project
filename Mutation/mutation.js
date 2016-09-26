/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.*/
function mutation(arr) {
  var x = arr[0].toLowerCase();
  var y = arr[1].toLowerCase();
      y = y.split("");
  for (var i = 0; i < y.length; i++){
      ans = x.indexOf(y[i]);
    if(ans < 0){
      return false;
    }
  }
  return true ;
}

mutation(["hello", "Hello"]); // true
mutation(["Mary", "Army"]); //true
mutation(["Mary", "Aarmy"]); //true
mutation(["hello", "neo"]); //false
mutation(["voodoo", "no"]); //false