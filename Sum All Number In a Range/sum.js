/*We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

*/
function sumAll(arr) {
  
  var total =  arr.reduce(function(prevNum,currentNum){
    var maxNum,minNum,temp=0;
    maxNum = Math.max(prevNum,currentNum);
    minNum = Math.min(prevNum,currentNum); 
    for (var i = minNum; i <=maxNum ; i++){
    temp +=i;
    }
    return temp;
  });
  
  
  return total;
}

sumAll([1, 4]); //10
sumAll([4, 1]); //10
sumAll([5, 10]); //45
sumAll([10, 5]);//45
