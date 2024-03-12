   
let promise = new Promise(function (resolve, reject) {
    const x = "Hello";
    const y = "Hii"
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});
 
// promise.
//     then(function (){
//         console.log('Success,You are welcome');
//     }
//     catch(function () {
//         console.log('Some error has occurred');
//     });
//Promise Example


let promiseObj = new Promise(function (resolve, reject) {
    reject('Promise Rejected')
})
 
promiseObj
    .then(function (successMessage) {
        console.log(successMessage);
    }, function (errorMessage) {
        console.log(errorMessage);
    });