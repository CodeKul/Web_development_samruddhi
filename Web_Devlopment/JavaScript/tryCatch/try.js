try {
    
    let result = someUndefinedVariable + 5;
    console.log(result);
  } catch (TypeError) {
    console.error("TypeError occurred");

  } finally {
    console.log("This is the finally block");
  }
  