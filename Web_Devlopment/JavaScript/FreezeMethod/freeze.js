// The Object.freeze() static method freezes an object. Freezing an object prevents extensions 
// and makes existing properties non-writable and non-configurable.
// A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be 
// removed, their enumerability, configurability, writability, or value cannot be changed, and the object's
// prototype cannot be re-assigned. freeze() returns the same object that was passed in.
// freeze() returns the same object that was passed into the function. It does not create a frozen copy.


const obj = {
    prop: 42,
  };
  
  Object.freeze(obj);
  obj.prop = 33;
 

  console.log(obj.prop);
 
  