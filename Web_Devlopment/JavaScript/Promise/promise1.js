
let myPromise = new Promise(function(myResolve,myReject){
      myResolve();
      myReject();
})

myPromise.then(
    function(value){
        console.log("code executed")
    },

    function(error){
        console.log("error")

    }
)