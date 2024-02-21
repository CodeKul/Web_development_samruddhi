let addressObj = [
    {
    colonyName:"Blue Heaven",
    pinCode:"444605"
  },
{}
];

  
//   let addressObjCopy = addressObj;
//   addressObj.colonyName = "Happy Colony"
//   addressObj.pinCode = "89898989"
// console.log("addressobjcopy",addressObjCopy)
// addressObjCopy = structuredClone(addressObj)
//   console.log("deepCopy",addressObjCopy)
  
  
  let adressObjCopy = addressObj;
  
  adressObjCopy.colonyName = "Happy colony"
  adressObjCopy.pinCode = "123456"
  
  console.log("The adressObjCopy is ",adressObjCopy);
  
  console.log("The addressObj is ",addressObj);


  let arrayOfObjects = [
    {
        colonyName: "Blue Heaven",
        pinCode: "444605",

    },
    {
        colonyName: "Green Meadows",
        pinCode: "123456"
    }
];

let arrayOfObjectsCopyShallow = [...arrayOfObjects];


let arrayOfObjectsCopyDeep = structuredClone(arrayOfObjects);


arrayOfObjectsCopyShallow[0].colonyName = "Red Paradise";
arrayOfObjectsCopyShallow[1].pinCode = "44606"
arrayOfObjectsCopyShallow[0].colonyName = "Red ";
arrayOfObjectsCopyDeep[1].pinCode = "999999";

console.log("Shallow copy result:", arrayOfObjectsCopyShallow);
console.log("Original array:", arrayOfObjects);

console.log("Deep copy result:", arrayOfObjectsCopyDeep);
console.log("Original array:", arrayOfObjects);

