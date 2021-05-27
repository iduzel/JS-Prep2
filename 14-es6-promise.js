let promiseToCleanTheRoom = new Promise(function(resolve,reject) {

  let isClean = false;

  if(isClean){
    resolve('Room is clean')//this will be assigned to then function parameter
  }else{
    reject('Room is still dirty')//this will be assigned to catch function parameter
  }
})

promiseToCleanTheRoom.then(function(fromResolve){//When you create a promise parameter of then function = resolve
  console.log('The room is ' + fromResolve);
}).catch(function(fromReject) {//When you create a promise parameter of catch function = reject
  console.log('The room is ' + fromReject);
})


//now we have dependencies

let cleanRoom = function() {
  return new Promise(function(resolve,reject) {
    resolve('Room is clean')
  })
}

let removeGarbage = function(msg) {
  return new Promise(function(resolve,reject) {
    resolve(msg +'. Garbage is removed')
  })
}


let winIceCream = function(msg) {
  return new Promise(function(resolve,reject) {
    resolve(msg + '. You got the icecream.')
  })
}

cleanRoom().then(function(result){
  return removeGarbage(result);
}).then(function(result){
  return winIceCream(result)
}).then(function(result){
  console.log('Finished. ' + result);
})
