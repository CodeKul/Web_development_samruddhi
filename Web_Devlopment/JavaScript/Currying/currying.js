// function simpleFunction (param1,param2,param3)

// It is a technique in functional programming, that transforms the function of multiple
// arguments into several functions of a single argument in sequence.

// Why is currying useful in JavaScript?

// It helps us to create a higher-order function
// It reduces the chances of error in our function by dividing it into multiple smaller functions
// that can handle one responsibility.
// It is very useful in building modular and reusable code
// It helps us to avoid passing the same variable multiple times
// It makes the code more readable

//Currying is defined as changing a function having multiple arguments into a sequence
//of functions with a single argument. It is a process of converting a function with more arity into
//a function having less arity.
//The term arity means the number of parameters in a function.

// It is a transformation of functions that translate a function from callable as
//  add(1, 2, 3) into callable as add(1)(2)(3). It only transforms a function instead of calling it.
// It returns a new function until all arguments get exhausted.

//   or instance, suppose a function fun with three arguments A, B, and C,
//   and it returns value res. When it is curried, it will be broken down into three functions
//   let be X, Y, and Z. The new function X will take A as an argument and will return the function Y,
//   which will take B as an argument and return the function Z, which takes C as an argument
//   and finally returns the required value res.

// Currying helps to prevent the passing of the same variable, again and again.
// It is useful in event handling.
// Write little code modules that can be easily reused and configured.

//High Order function
function calculateV(length, breadth, height) {
  return length * breadth * height;
}
console.log(calculateV(4, 5, 6));

//Currying
function calculateVolume(length) {
  return function (breadth) {
    return function (height) {
      return length * breadth * height;
    };
  };
}
console.log(calculateVolume(4)(5)(7));
