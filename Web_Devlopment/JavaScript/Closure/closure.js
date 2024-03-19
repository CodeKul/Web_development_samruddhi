// Closure is a concept in programming that involves bundling together a function
// and its surrounding state, such as variables, in a single package.
// This allows the function to retain access to the variables even after the surrounding
// code has finished executing.

// Data Privacy: Closures provide a way to create private variables.
// Since variables within a closure are not accessible from outside the function,
// they can store sensitive data or implementation details without
// the risk of being accidentally modified or accessed.

// Overall, closures provide a flexible and powerful mechanism for managing scope,
//  state, and behavior in programming languages. They are particularly valuable in languages
//  that support first-class
//  functions and lexical scoping, such as JavaScript, Python, and many others

function createCounter() {
  let count = 0; // This variable is enclosed within the function createCounter

  function increment() {
    count++; // increment count
    console.log(count);
  }

  return increment; // return the inner function
}

const myCounter = createCounter();
myCounter(); // Output: 1
myCounter(); // Output: 2

//   createCounter() returns a function increment(), which has access to the count variable
//   even though it's defined outside of increment().
//   This is possible due to closure. So, every time you call myCounter()
