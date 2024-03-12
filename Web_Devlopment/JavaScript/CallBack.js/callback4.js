function simpleHigherOrder(receivedCallback) {
    setTimeout(receivedCallback, 5000);
  }
  
  function simpleCallback() {
    console.log("This was executed after a delay of 5 seconds.");
  }
  
  simpleHigherOrder(simpleCallback)