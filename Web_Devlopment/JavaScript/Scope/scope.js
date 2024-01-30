//Js has two main type of scope :-
//global  scope and local scope


// 1.Global scope :
//  Variables declared outside of any function
//  They can be accessed from anywhere in the code, including inside functions.
//  Global variables are declared without using the var, let, or const keywords. 
//  They become properties of the global object (window in browsers).

// let globalVar = "global";
// function exampleglobal(){
//     console.log("i am global");
// }
// exampleglobal();


// 2.Local Scope:
// Variables declared inside a function or block have local scope. 
// They are accessible only within that function or block.
// Variables declared with var have function scope, while those declared with
//  let and const have block scope

// function exampleFunction() {
//     // Local variable with function scope
//     let localVar = "I am local!";
//     console.log(localVar);
//   }
  
//   exampleFunction();  // Output: "I am local!"
  
    

  // 3.Function Scope:

  // Variables declared with var are function-scoped,
  //  which means they are limited to the function in which they are defined.


function exampleFunction() {
    if (true) {    
      var functionVar = "I am function-scoped!";
     
    }
    console.log(functionVar);
     // Accessible within the function
  }

 
  exampleFunction();  // Output: "I am function-scoped!"
  