message = "Good"

function hello1(){
  let  message = "good morning"
    {
        let message = "good afternoon"
    console.log("hello 1",hello1)
    }
    console.log(message)
    let c = function hello2(){
        console.log("I am c")
    }
    return c;
}
c = hello1()
c()
