function greeting(name) {
  return function () {
    console.log("Hello, " + name + "!");
  };
}

const greetJohn = greeting("John");
const greetEmily = greeting("Emily");

greetJohn(); // Output: Hello, John!
greetEmily(); // Output: Hello, Emily!

//the greeting function takes a name parameter and returns another function.
//This returned function forms a closure over the name variable.
//When you call greeting('John'), it creates a function that greets 'John',
//and when you call greeting('Emily'), it creates a function that greets 'Emily'.
//Each function retains access to its respective name variable even after the greeting
//function has finished executing.
