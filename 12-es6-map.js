let map = new Map();

map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');

console.log(map.size);

console.log(map.get(true));
console.log(map.get(1));
console.log(map.get('1'));

//Map can use objects as keys
let student ={name:'Mike', age:'20'};
let visits = new Map();
visits.set(student,100);

// console.log(visits.get(student));

//Map can use functions as keys
let newMap = new Map();
let fun = function(){console.log('Hello');};
newMap.set(fun,('This is function'));
console.log(newMap.get(fun));

//chaining
let myCars = new Map();
myCars.set(1, 'Honda Civic')
      .set(2, 'Honda Accord')
      .set(3, 'Honda CRV');

    console.log(myCars.get(2));

//iteration - over keys
for(let car of myCars.keys()){ //myCars.entries()
  console.log(car);
}

//iteration - over value
for(let valueOfMyCars of myCars){
  console.log(valueOfMyCars);
}

for(let value of myCars.entries()){
  console.log(value);
}

for(let [key,value] of myCars){
  console.log(key + '=' + value);
}

myCars.forEach((value,key) => {console.log(key + ' : ' + value);})
