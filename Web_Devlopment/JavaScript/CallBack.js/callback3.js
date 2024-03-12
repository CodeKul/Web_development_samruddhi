let count = 0;

let timer = setInterval(runTime, 1000);

function runTime() {
  count = count + 1;

  console.log(`The time in seconds in ${count}`);

  if (count === 10) {
    clearInterval(timer);
  }
}