//If you have one (and just one) parameter, you could omit the round parentheses
// made for representing the parameters before the arrow symbol.

let rollNo = 21;
const getData = (rollNo) => console.log(`The Roll No. is ${rollNo}`);

getData(rollNo);

//parameters are passed in the parentheses

const getInfoData = (param1, param2) => console.log(param1, param2);

let phoneNo = 9878678767;
let studentName = "Jerry";

getInfoData(phoneNo, studentName);