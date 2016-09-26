/* Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).*/

function getIndexToIns(arr, num) {
  // Find my place in this sorted array
  arr.sort(function(a,b){
    return a-b;
  });
   var x =  arr.findIndex(function(val){
      return val >= num;
    
  });
  return (x >= 0 ) ? x : arr.length;
  
 
}
getIndexToIns([10, 20, 30, 40, 50], 35); //3
getIndexToIns([2, 5, 10], 15);// 3
getIndexToIns([5, 3, 20, 3], 5); //2