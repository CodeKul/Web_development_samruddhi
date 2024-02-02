let user ={
    userName : "Rick",
    designation : "Software Enginner",
    salary :"9800",
    isWorking : true,
    phoneNo : "67990975868"
}
console.log("object before modification",user)

delete user.userName

console.log("object after modification",user)