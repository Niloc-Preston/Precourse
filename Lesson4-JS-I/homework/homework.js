//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = null ;

//create a number variable, it an be any number
const newNum = null ;

//create a boolean variable
const newBool = null ;

//solve the following math problem
const newSubtract = 10 - null === 5;

//Solve the following math problem
const newMultiply = 10 * null === 40 ;

//Solve the following math problem:
const newModulo = 21 % 5 === null ;



//In the next 22 problems you will compete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names

function returnString(str) {
return;
}



function add(x, y) {
 let i =(x+y);
 return i;
}

function subtract(x, y) {
 let i =(x-y);
 return i;
}

function multiply(x, y) {
  let i = (x*y);
  return i;
}

function divide(x, y) {
  let i = (x/y);
  return i;
}

function areEqual(x, y) {
  if(x===y);
  return true;
  if(x!==y);
  return false;
}


function areSameLength(str1, str2) {
  return str1.length === str2.length;
}

function lessThanNinety(num) {
return num <90;
}

function greaterThanFifty(num) {
  return num >50;
}

function getRemainder(x, y) {
  return x % y;
}

function isEven(num) {
  return num % 2===0;
}

function isOdd(num) {
  return num % 2===1;
}

function square(num) {
 return Math.pow(num,2);
}

function cube(num) {
  return Math.pow(num,3)
}

function raiseToPower(num, exponent) {
  return Math.pow (num,exponent);
}

function roundNumber(num) {
  return Math.round(num)
}

function roundUp(num) {
  return Math.ceil(num)
}

function addExclamationPoint(str) {
  return str +'!';
}

function combineNames(firstName, lastName) {
  return firstname +''+ lastName;
}

function getGreeting(name) {
 return 'Hello'+ name +'!'
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
 return length *width;
}

function getTriangleArea(base, height) {
 return height*(base/2);
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  newString,
  newNum,
  newBool,
  newSubtract,
  newMultiply,
  newModulo,
  returnString,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
};
