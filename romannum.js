/*http://www.mathsisfun.com/roman-numerals.html use this link to understand the logic*/

function convertToRoman(num) {
    var romanAnswer=""; // var to store final answer
    
    /*array1(romanGroup) represent the some basic roman transform of equivalent num in array 2*/    
    var romanGroup = ["I","II","III","IV","V","VI","VII","VIII","IX","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","M"];
    var numGroup =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000];

    var newNum = [];
    
    /*for loop to break the num in thousand , hundreda, tens and ones*/
    for(var i =0 ;num!==0;i++){
        newNum[i] = num%(Math.pow(10,i+1)) ;
        num=num-newNum[i];   
    }
    newNum = newNum.reverse();

    newNum.forEach(function(item){
     var index =  numGroup.indexOf(item);
      if(item <=1000 && index >=0){
         romanAnswer += romanGroup[index];
      }
      else if (item >1000){
       while (item >=1000){
         romanAnswer +="M";
         item -= 1000;
       }
      }   
});    
    return romanAnswer;
   
}

console.log(convertToRoman(10999));
