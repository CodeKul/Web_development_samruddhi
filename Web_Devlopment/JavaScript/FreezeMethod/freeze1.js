let obj = {
    prop: function () {},
    foo: "bar",
  };

  let o = Object.freeze(obj);
  

  obj.foo = "bar1";
  console.log(obj.foo); 
  

  obj.new_foo = "bar";
  console.log(obj.new_foo); 

  