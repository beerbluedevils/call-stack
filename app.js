//Call Stack

const exponen = (x) => x * x;
//This is the first function that put in to create an exponential value

const sumExponen = (x, y) => exponen(x) + exponen(y); 
//This is the second function that put in to call the first function
//and sum two values

const isEven = (x, y) => sumExponen(x, y) % 2 === 0; 
//this is the last function that we call first 
//by calling sumExponen to process the return

console.log(isEven(3,4));

//isEven 3, 4
//3 is put in x in the first function and process that equal 3 * 3 = 9
//4 is put in y in the first function and process that equal 4 * 4 = 16
//3 is put in x in the second function result in expenen(x) is 9
//4 is put in y in the second function result in exponen(y) is 16
//the result of second function is 9+16 = 25
//put the value 25 in the third function isEven so that return 25%2 === 0 result is false

//exponen is the first function we put in and it's the last function that called
//sumExponential is the second function we put in and it's the second function we called
//isEven is the last function we put in and it's the first function we called