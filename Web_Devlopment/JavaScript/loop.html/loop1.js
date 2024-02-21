  
for (let i = 0; i < 11; i++) { 
    if (i % 2 == 0)  
        continue; 
          
    console.log(i); 
} 

//  let val = 1;
// while(val < 6){
//     console.log(val);
//     val += 1;
// } 


   
//  for (let i = 1; i < 6; i++) { 
//     if (i == 3)  
//         break; 
          
//     console.log(i); 
// } 


// const arr = ["arr1","arr2","arr3","arr4"]
// for (let val of arr){
//  console.log(val)
// } 

const arr = [1, 2, 3];
const newArr = arr.map(val => val * 2);
console.log(newArr);


let x ;
for (x=2;x <= 4;x++){
    console.log("value of x : " + x)
}

function employee() {
    let Platform = {"firstName" : "Jhon","lastName": "Doe","age" : "20"};
 
    let text = "";
    let x;
    for (x in Platform) {
        text += Platform[x] + " ";
    }
    console.log(text);
}
employee()