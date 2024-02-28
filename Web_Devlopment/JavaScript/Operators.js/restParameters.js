//  function fun(a, b){
//     return a + b;
// }
// console.log(fun(1, 2)); 
// console.log(fun(1, 2, 3, 4, 5)); 


// In the above code, no error will be thrown even when we are passing arguments more 
// than the parameters, but only the first two arguments will be evaluated. 
// It’s different in the case of the rest parameter. With the use of the rest parameter, 
// we can gather any number of arguments into an array and do what we want with them. 


function fun(...input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}
console.log(fun(1, 2)); 
console.log(fun(1, 2, 3)); 
console.log(fun(1, 2, 3, 4, 5)); 