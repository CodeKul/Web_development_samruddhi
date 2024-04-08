// Throttling in JavaScript is a technique used to limit the number of times a
// function can be called within a specified time period. It ensures that even if the function is
// invoked multiple times, it will only execute once during the throttling interval. Throttling is
// often used in scenarios like handling user input events such as scroll, resize, or keypress events to
// avoid performance issues caused by rapid and frequent function calls.

function throttle(func, delay) {
  let timeoutId;
  return function () {
    const context = this;
    const args = arguments;
    if (!timeoutId) {
      timeoutId = setTimeout(function () {
        func.apply(context, args);
        timeoutId = null;
      }, delay);
    }
  };
}

function logMessage(message) {
  console.log(message);
}

const throttledFunction = throttle(logMessage, 1000);

throttledFunction("Message logged.");
throttledFunction("Second message");
throttledFunction("Third message");

setTimeout(() => {
  throttledFunction("Message after delay");
}, 1500);
