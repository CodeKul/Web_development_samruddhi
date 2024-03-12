function myDisplay(some) {
   console.log("message",some)
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  

  
    if (x == 1) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplay(value);},
    function(error) {myDisplay(error);}
  );