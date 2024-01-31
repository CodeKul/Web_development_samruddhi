// Hoisting is a behavior where variable and function declarations are moved 
// to the top of their containing scope during the compilation phase. However, 
// only the declarations are hoisted, not the initializations

//  1
a = 5;
 var a;
console.log(a); 


// 2
foo(); 
function foo() {
  console.log("Hello");
}

// 3
function example1() {
    console.log(a); 
    if (true) {
      var a = 5;
    }
    console.log(a); 
  }
  
  example1();
  

