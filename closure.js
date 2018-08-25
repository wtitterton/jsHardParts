// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


function createFunction() {
	function hello()
  {
    console.log("hello");
  }

  return hello;
}

const hello = createFunction();

hello();
// UNCOMMENT THESE TO TEST YOUR WORK!
// var function1 = createFunction();
//function1();



function createFunctionPrinter(input) {
	function print()
  {
    console.log(input);
  }

  return print;
}



// UNCOMMENT THESE TO TEST YOUR WORK!
var printSample = createFunctionPrinter('sample');
printSample();
var printHello = createFunctionPrinter('hello');
printHello();



function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();



function addByX(x) {
  var count = x;
	function add(num)
  {
    return count = num + x
   console.log(count)
  }

  return add;
}

var addByTwo = addByX(2);
addByTwo(1);
addByTwo(2);
addByTwo(3);

var addByThree = addByX(3);
addByThree(1)
addByThree(2)
addByThree(3)

var addByFour = addByX(4);
addByFour(4); //should return 8
addByFour(10); //should return 14

//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
	var executed = false;
  var passedNum = 0;
  return function(num) {

    if (!executed) {
        executed = true;
        passedNum = num;
      return func(num)
    }
    else
    {
      return func(passedNum);
    }

  };
 }

var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4));  //should log 6
console.log(onceFunc(10));  //should log 6
console.log(onceFunc(9001));  //should log 6


function after(count, func) {
	var run = 0;
  return function()
  {
     if(run == count - 1)
     {
       func();
     }
     else
     {
        run++;
     }
  }

}

var called = function() { console.log('hello') };
var afterCalled = after(3, called);

afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> 'hello' is printed


function delay(func, wait) {
	return function()
  {
    setTimeout(func,wait);
  }
}

var waiter = delay(function(){
  console.log("woooo");
},1000);
waiter();


/* my examples */

var makeList = function()
{
  var list = [];
  return function(items)
  {
    for(var i = 0; i < items.length; i++)
    {
      list.push(items[i]);
    }
    return list;
  }
}



var names = makeList();
var namesList = names(["will","sam","alex"])
console.log(namesList);
