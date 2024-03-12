// const message = function() {  
//     console.log("This message is shown after 3 seconds");
// }
 
// setTimeout(message, 3000);


// setTimeout(start, 5000);
// function start() {
// console.log("The operating system has been started");
// console.log("Preparing Devices...");
// console.log("Loading Device Drivers...");
// }

function loadScript(src,callback){
  var script = document.createElement("script");
  script.src = src;
  script.onload = function(){
    console.log("loaded script with src" + src)
    callback(null,src)
  }
  script.onerror = function(){
    console.log("Error loading script with SRC" + src)
    callback(new Error("src got some error"))
  }
  document.body.appendChild(script);
}
function hello (error,src){
    if(error){
        console.log(error)
        return;
    }
    alert(" Hellloooo " + src)
}
function hii(){
    alert("Hiiiiiiii" + src)
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",hello)