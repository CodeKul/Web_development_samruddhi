// call(): The call() method allows you to call a function with a specified this value and 
// individual arguments provided as comma-separated values.


//Syntax

// functionName.call(thisArg, arg1, arg2, ...);

// functionName: The function to be called.
// thisArg: The value to be passed as the this parameter to the function.
// arg1, arg2, ...: Optional arguments that the function requires.


function sayHello() {
    console.log('Hello, ' + this.name);
}

var person = {
    name: 'Alice'
};

sayHello.call(person);


// Changing Context: call() is particularly useful when you want to execute a function 
// with a specific context, especially when dealing with methods in objects.
// Reuse Functions with Different Contexts: It allows you to reuse functions 
// in different contexts without modifying the original function definition.
// Function Borrowing: It enables you to borrow methods from other objects and 
// use them in a different context.