// Higher Order Function: A function that accepts a function as an argument and/or
//  returns a function as its value.


function applyOperation(x, y, operation) {
    return operation(x, y);
}


function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}


const resultAddition = applyOperation(5, 3, add);
console.log("Addition result:", resultAddition);

const resultSubtraction = applyOperation(5, 3, subtract);
console.log("Subtraction result:", resultSubtraction);

const resultMultiplication = applyOperation(5, 3, multiply);
console.log("Multiplication result:", resultMultiplication);
