/* Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.

For information about Object.keys visit (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
*/

function whatIsInAName(collection, source) {
     var sourceKey = Object.keys(source);// to get the keys of second object in array form  
   var arr = collection.filter(function(item){
       var result = true; 
      sourceKey.forEach(function(key){
        var sourceVal = source[key];
        var itemVal = item[key];
        result = result && (sourceVal == itemVal); 
      });
     return result;
  });
    
  
  return arr;
}


whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//[{ first: "Tybalt", last: "Capulet" }]
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
//[{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].