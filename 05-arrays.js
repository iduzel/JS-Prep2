//Creating array
var scores = new Array(); //empty
var numbers = new Array(10);//array with initial size 10
var myNumbers = new Array(9,10,4,5);//array with initial elements

var athletes = Array(3);//array with initial size 3
var signs = Array('Red'); //array with one elements

var emptyArray = [];
var colors = ['red', 'green', 'blue'];

//Accesing array elements
var students = ['Mike', 'Tim', 'Ozzy'];
console.log(students);
console.log(students[0]);

//Basic operations on arrays
students.push('Emma');//adds element to end of an array
console.log(students);

students.unshift('Adam');//adds element to beginning of an array
console.log(students);

students.pop();//removes an element from the END of an arrays
console.log(students);

students.shift();//removes element from beginning of an array
console.log(students);

var index = students.indexOf('Mike');
console.log(index);

students.splice(0,1);// delete elements,    0 -->index     ,     1 --> number of elemets to delete
console.log(students);

students.splice(1,1,'Matt');//go to index 1 and delete one element and add 'Matt'
console.log(students);

var array = [1,30,4,21];
console.log(array.sort());
