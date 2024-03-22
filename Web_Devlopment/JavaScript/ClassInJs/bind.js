// The bind() method creates a new function with a specified this value and, optionally, 
// initial arguments. Unlike call() and apply(), bind() doesn't immediately execute the function; 
// instead, it returns a new function with the specified context and arguments
//  bound to it


//syntax

// var newFunc = functionName.bind(thisArg[, arg1[, arg2[, ...]]]);

//functionName: The function to be called.
//thisArg: The value to be passed as the this parameter to the function when the new function is executed.
// arg1, arg2, ...: Optional arguments to be prepended to the arguments passed to the bound function when it is invoked.

function sayHello() {
    console.log('Hello, ' + this.name);
}

var person = {
    name: 'Alice'
};

var greet = sayHello.bind(person); // function
greet(); 


// a = 10
// console.log(a)
//Immutable: The original function remains unchanged. bind() creates a new function, 
//leaving the original function untouched.
//Deferred Execution: It allows you to create functions with predefined contexts 
//and arguments that can be invoked later.
