// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {

  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
//console.log(addTwo(3));
//console.log(addTwo(10));


// Challenge 2
function addS(word) {
	return word += "s";
}

// uncomment these to check your work
 //console.log(addS('pizza'));
 //console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
	var output = [];
  for(var i = 0; i < array.length; i++)
  {
    output.push(callback(array[i]))
  }
  return output;
}

console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
	var output = [];
  for(var i = 0; i < array.length; i++)
  {
    output.push(callback(array[i],i,array))
  }
  return output;
}

// see for yourself if your forEach works!
console.log(forEach(["ball","tenni"], addS));

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  forEach(array,callback)
}
mapWith([1,2,3], function(item,index,array){
  console.log(item);
  console.log(index);
  console.log(array);
})
//Extension 2
function reduce(array, callback, initialValue) {
  var result = initialValue;

  for(var i = 0; i < array.length; i++)
  {
    result = callback(array[i],result);
  }

  return result;
}

var sum = reduce([5,5,5],function(item, total){
    return item += total;
},0)

console.log(sum);
//Extension 3
function intersection(arrays) {

}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(arrays) {

}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2,callback) {
  var res = {};
  for(var i = 0; i < array1.length;  i++)
  {
    if(callback(array1[i]) == callback(array2[i]))
    {
      res[array1[i]] = array2[i];
    }
  }
  return res;
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'],function(str){
  return str.toLowerCase();
}));


//Extension 6
function multiMap(arrVals, arrCallbacks) {

}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
