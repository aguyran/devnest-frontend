var student = {
  firstName: "Soap",
  lastName: "?",
  getName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(student.getName());

var outsideFunction = function (args) {
  return this.getName() + " " + args;
};
//Calling the outsidefunction without call result in error as this (window) doesnt have the getName

console.log(outsideFunction.call(student, "this is using call"));

//We can also bind bind a function to a this by using bind and then assign it so we can use without calling in a scope
var bindedFunction = outsideFunction.bind(student);
console.log(bindedFunction());

// apply function is similar to call only expects array in arguments
console.log(outsideFunction.apply(student, ["this is using apply"]));
