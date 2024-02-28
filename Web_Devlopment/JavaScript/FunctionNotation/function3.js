//arrow function
// ES6 introduced a new and shorter way of declaring an anonymous function,
// which is known as Arrow Functions. In an Arrow function, everything remains the same, 
//except here we don’t need the function keyword also. Here, we define the function by a 
//single parenthesis and then ‘=>’ followed by the function body.

let getData = () => {
    console.log("The name is Jhon");
  };
  getData(); //calling the function


  //If the function body contains just a single statement ,
//you can omit the curly parentheses of the function body and write it all on a single line:

const getDataInfo = () => console.log("Hii");
getDataInfo();