// function add(a,b,c){
//     return a + b + c
// }
// console.log(add(3,6,8));



// function addition(a){
//     return function(b){
//         return function(c){
//             return a + b + c;
//         }
//     }
// }
// console.log(addition(2)(3)(4))


userObj = {
    name : "Samruddhi",
    age : 23
}

function userInfo (obj){
    return function(userInfo){
        return obj[userInfo]
    }
}
let res = userInfo(userObj);
console.log(res('name'), res('age'));



