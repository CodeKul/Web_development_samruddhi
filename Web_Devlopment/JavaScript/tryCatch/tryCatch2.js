try {
    const x = 10;
    console.log("We are inside the try block");
    console.log("Are we inside the try block ?");
  } catch (error) {
    console.log("The error object caught in the catch block is ", error);
  } finally 
{
    console.log("The finally block is going to be executed anyways.");
}