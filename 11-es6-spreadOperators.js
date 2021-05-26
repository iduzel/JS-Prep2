let mid = [3,4,7,11,'Hello'];
let arr = [1,2,...mid,5,6];

console.log(arr);

let str = 'Hello';
var chars = [...str];
console.log(chars);

//Rest operators collects all elements into array
function fun(...theArgs){
  console.log(theArgs.length);
}

fun();
fun(5);
fun(5,6,7);


function multiply(multiplier,...theArgs){
  return theArgs.map(element => multiplier * element);//this map() method. Not map object
}

let arr2 = multiply(2,15,25,42);
console.log(arr2);
