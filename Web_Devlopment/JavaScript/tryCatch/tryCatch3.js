function getMonthName(monthIndex) {
    let monthsArray = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    if (monthsArray[monthIndex]) {
      return monthsArray[monthIndex] != undefined;
    } else {
      throw new Error("Wrong Month Number");
    }
  }
  
  try {
    let currentMonth = 14;
  
    let requiredIndexPosition = currentMonth - 1; 

    let monthName = getMonthName(requiredIndexPosition);
  
    console.log("The resultant monthName is ", monthName);
  } catch (error) {
    console.log(
      "The error object's property values  inside catch block is ",
      error.message,
      error.name
    );
  
    console.log("The error object is ", error);
  }
  