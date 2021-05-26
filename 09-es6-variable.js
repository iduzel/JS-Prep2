var x = 1;//global and function scoped

if(x === 1){
  var x = 2;
  console.log(x);
}

console.log(x);


let y = 1;

if(y ===1){
  let y = 2;
  console.log(y);
}

console.log(y);

// const number = 50;
// number = 40;
// console.log(number);//Error. You cannoz reassign the 'const'



//Template Strings

let firstName = 'Mike';
let lastName = 'Smith';

console.log('Ma name is : ' + firstName + ' ' + lastName);

console.log(`My name is : ${firstName} ${lastName}`);
