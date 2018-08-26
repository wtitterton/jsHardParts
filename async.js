/**********************************************
                        challenge one
***********************************************/
 /*
 Write code that will log to the console, 'I am at the beginning of the code'.
 */
 console.log( 'I am at the beginning of the code');
/*
Beneath that console log, set a timer (see setTimeout) that will log to the console 'I am in the setTimeout callback function' after 3 seconds (3000 ms)
*/

setTimeout(function(){
  console.log('I am in the setTimeout callback function');
},0);

console.log('I am at the end of the code');

function clearAllIntervals() {
  for (let i = 0; i < 1000; i++) {
    clearInterval(i);
  }
}

// const int = setInterval(function(){
//   console.log("hello");
// },2000)
//
// setTimeout(function(){
//   clearInterval(int);
// },10000)

// function everyXsecsForYsecs(callback,interval,totalTime)
// {
//   const int =  setInterval(callback,interval);
//   setTimeout(function(){
//     clearInterval(int);
//   },totalTime)
// }

//recursive version
var run = true;
function everyXsecsForYsecs(callback,interval,totalTime)
{
  callback();
  if(!run)
  {
    //condition met exit function destroy local exicution context
    // this does no continue to run :)
    return
  }
  // calls method again creating a recusive loop
  setTimeout(function(){
    everyXsecsForYsecs(callback,interval,totalTime);
  },interval)

  setTimeout(function(){
    run = false;
  },totalTime)
}

function howdy()
{
  console.log('Howdy');
}

//everyXsecsForYsecs(howdy,1000,5000);

function each(arr,callback)
{
  for(var i = 0; i < arr.length; i++)
  {
    callback(arr[i],i,arr[i]);
  }
}

function delayLog(item,index,delay)
{
  setTimeout(function(){
    console.log(item + " at index" + " index " + "delayed for " + delay);
  },delay)

}

each([ 2000, 5000, 0,3500],delayLog);
