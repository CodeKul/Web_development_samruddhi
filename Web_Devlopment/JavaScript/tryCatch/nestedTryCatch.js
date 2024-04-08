try {
    let someUndefinedVariable = undefined;
    try {
      let result = someUndefinedVariable + 5;
      console.log(result);
    } catch (innerError) {
      console.error("Inner error occurred:", innerError.message);
    }
    let array = [1, 2, 3];
    console.log("array of given try  catch block",array[10]); 
  } catch (outerError) {
    console.error("Outer error occurred:", outerError.message);
  } finally {
    console.log("This is the finally block");
  }
  