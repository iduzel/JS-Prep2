//es5
let x = function(a){
  return a;
}

//es6
let a = a => a;

//if we do not have any parameters
let y = function(){
  console.log('hello');
}

let y1 = () => {console.log('hello');}


// if we have multiple parameters
let z = (a,b,c) => a+b+c;


//multiline arrow functions
let sum = (a,b) => {
  let result = a+b;
  return result;
}

//stream in Java -- filter-- inspect these
let total = arr =>arr.reduce((a,b) => a+b);
let arr = [5,10,20];

console.log(total(arr));


//map() method : creates a new array with the results of calling a provivded function
//on every element in the calling array

const map1 = arr.map(xsalla => xsalla*3);
console.log(map1);


//for..of : creates a loop iterating over iterable objects

let myFruits = ['Apple', 'Orange', 'Banana'];
for(let value of myFruits){
  console.log(value);
}

//
