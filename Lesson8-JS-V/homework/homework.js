// Do not change any of the function names

function createUserClass() {
  const user={
    username:'',
    name:'',
    email: '',
    password:'',

}
return name;


  }

  
  // create an ES6 class or a constructor function called User
  // it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
  // the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
  // {{name}} should be the name set on each instance
  // return the class
}

function addPrototypeMethod(Constructor) {
Constructor.prototype.sayhi = fuction(){
  return 'Hello World!';
}
}

function addReverseString() {
String.prototype.reverse = function( ){
return this.split('').reverse().join('');
 }
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  createUserClass,
  addPrototypeMethod,
  addReverseString,
};
