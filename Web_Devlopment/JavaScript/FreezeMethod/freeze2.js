// let obj = {name: "JavaScript"};

// console.log(Object.isFrozen(obj)); 

let newObj = {b : 2}
Object.preventExtensions(newObj)
//false
console.log(Object.isFrozen(newObj))

Object.defineProperty(newObj,"b",{
   writable : false,
})
//false
console.log(Object.isFrozen(newObj))

Object.freeze(newObj);
//true
console.log(Object.isFrozen(newObj))


