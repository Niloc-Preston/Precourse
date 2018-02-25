// Do not change any of the function names

function multiplyArguments() {
 
    let z = 1;
    if( arguments.length === 0)
    return false;
    for (let i = 0; i <arguments.length; i++)
    {
   z = z*arguments[i];
   }
   return z;
   }
}

function getBiggest(x, y) {
  if (x >= y) return x;
  return y;
}

function greeting(language) {
  switch (language) {
    case 'German':
      return 'Guten Tag!';
    case 'Mandarin Chinese':
      return 'Ni Hao!';
    case 'Spanish':
      return 'Hola!';
    default:
      return 'Hello!';
  }
}

function isTenOrFive(num) {
  return num === 10 || num ===5;
}

function isInRange(num) {
  return num <50 && num >20;
}

function isInteger(num) {
 return num === parseInt(num);
}

function fizzBuzz(num) {
  const DBT = num % 3 ===0;
  const DBF =num % 5===0;
  if (DBT && DBF) return 'fizzbuzz'
  if (DBT) return 'fizz'
  if (DBF) return 'buzz'
  return num
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  if (num===0 || num === 1) return false;
  for(let i = 2; i < num; i++){
    if(num % i === 0) return false
  }
  return true;
}



// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyArguments,
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
};
