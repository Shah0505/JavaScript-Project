/*This function return factorial of given interger number
    for ex. factorialize(5) = 5*4*3*2*1 = 120
*/

function factorialize(num) {
  var factor = 1;
  for(var i=1; i <= num ; i++){
    factor *=i;
  }
  return factor;
}

factorialize(5); //ans is 120
