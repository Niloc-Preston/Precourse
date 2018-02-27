// Do not change any of the function names

function invokeCallback(cb) {
  cb();
}

function sumArray(numbers, cb) {
  var sum = 0;
  for(var i = numbers.length; i --;){
    sum += numbers[i];
  }
  cb(sum);
}

function forEach(arr, cb) {
  for(let i = 0; i < arr.length; i++;){
    cb(arr[i]);
  }
}

function map(arr, cb) {
  var newArr =[];
  newArr = arr.map(function(arr){
    return cb(arr);

  });
  retrun newArr;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback,
  sumArray,
  forEach,
  map,
};
