// In JavaScript, var, let, and const are used to declare variables,
 //but they have some differences 
//in terms of scope, hoisting, and reassignment

// 1. var:

// Variables declared with var are function-scoped. 
// This means they are only visible within the function in which they are declared.
// var is hoisted to the top of its scope during the compilation phase, 
// which means you can access the variable before its declaration, 
//but its value will be undefined.
// It allows redeclaration and reassignment.

function example() {
    var x = 10;
    if (true) {
      var y = 20;
      console.log(x);  // 10
    }
    console.log(y);  // 20, as 'y' is hoisted to the function scope
  }
  example()


// 2.let:

// Variables declared with let are block-scoped. 
// They are only accessible within the block, statement, or expression they are declared in.
// let is hoisted to the top of its block, but the variable is not initialized until 
//the declaration statement is evaluated. This is known as the "temporal dead zone."
// It allows reassignment but not redeclaration within the same scope.

function myFunction() {
    let x = 10;
    if (true) {
      let y = 20;
      console.log(x);  // 10
    }
    console.log(y);  // Error, 'y' is not defined here
  }
  myFunction()


// 3.const:

// Variables declared with const are also block-scoped.
// const is hoisted to the top of its block, and like let, 
// it is also in the temporal dead zone until the declaration statement is reached.
// It requires initialization at the time of declaration, and once assigned, 
// the value cannot be changed.
// It does not allow reassignment or redeclaration within the same scope.

function myExample() {
    const a = 10;
    if (true) {
      const b = 20;
      console.log(a);  // 10
    }
    console.log(b);  // Error, 'b' is not defined here
  } 
  myExample()


  //The Temporal Dead Zone (TDZ)

//   The Temporal Dead Zone (TDZ) is a concept in JavaScript that refers to the 
//   time span between 
//   the creation of a variable using let or const and the point where 
//   it is declared and initialized. 
//   During the TDZ, accessing the variable results in a ReferenceError. 
//   The variable exists in the scope,
//   but it cannot be accessed or assigned a value until the declaration statement is encountered.

console.log(e);  // ReferenceError: Cannot access 'x' before initialization
let e = 10;
