// Do not change any of the function names

function returnFirst(arr) {
let i = arr[0];
return i;
}

function returnLast(arr) {
  i=arr.pop();
  return i;
}

function getArrayLength(arr) {
return arr.getArrayLength;}

function incrementByOne(arr) {
 for(i = 0 ; i <arr.length;i++){
   arr[i]=arr[i]+1;
 }
 return arr;
}

function addItemToArray(arr, item) {
  arr.push(item)
  return arr
}

function addItemToFront(arr, item) {
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  return words.join('')
}

function contains(arr, item) {
return arr.includes(item);
}

function addNumbers(numbers) {
  return arr['']+1;

function averageTestScore(testScores) {
  let sum = numbers.reduce((a,b)=>a+b,0);
  return sum;
}

function largestNumber(numbers) {
 let i = Math.max(...numbers);
 return i;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
};
