/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays. */

function diffArray(arr1, arr2) {

  // function to compare two array and find the different one
  function checkValue(aray1,aray2){
   var temp =  aray1.filter(function(val,index){
     return aray2.indexOf(val) === -1;
    });
   return temp;
  }
  
 var newArr1 = checkValue(arr1, arr2);
 var newArr2 =  checkValue(arr2, arr1);
  return newArr1.concat(newArr2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); //[4]
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);//["piglet", 4]
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]); //["diorite", "pink wool"]

