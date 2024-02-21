const expr = "case1";
switch (expr) {
  case "case2":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "case3":
  case "case4":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  case "case5":
  case "case1":
    console.log("jwbhugu");
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
