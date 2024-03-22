// apply(): Similar to call(), the apply() method allows you to call a function with a specified this value, 
// but the arguments are provided as an array.


//syntax

// functionName.apply(thisArg, [argsArray]);

// functionName: The function to be called.
//thisArg: The value to be passed as the this parameter to the function.
//argsArray: An array or an array-like object containing the arguments to be passed to the function.


function greet(greeting) {
    console.log(greeting + ', ' + this.name);
}

var person = {
    name: 'Alice'
};

greet.apply(person, ['Hi']);

// Dynamic Number of Arguments: apply() is useful when the number of arguments to be passed to a
//  function may vary or when the arguments are available as an array or array-like object.
// Function Delegation: It allows you to delegate the execution of a function to another object, 
// setting its context appropriately.

//Both apply() and call() serve similar purposes, allowing you to invoke a function
//  with a specific this context. The main difference lies in how they accept arguments:

// call() takes arguments individually.
// apply() takes arguments as an array.
