function performCalculation(x, y, callback) {
    console.log(`Performing calculation with ${x} and ${y}`);
  
    const result = x + y;
   
    callback(result);
}


function logResult(result) {
    console.log(`Result is: ${result}`);
}


function squareResult(result) {
    console.log(`Squared result is: ${result * result}`);
}


performCalculation(3, 4, logResult);
performCalculation(5, 2, squareResult);
