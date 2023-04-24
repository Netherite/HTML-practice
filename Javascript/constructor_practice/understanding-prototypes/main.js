let log = console.log; 

let myObj = {};
log(myObj.constructor); // function object()
log(myObj.__proto__); 

function cat(){
    //constructor for kitty
}

let kitty = new cat(); 
log(kitty.__proto__ === Cat.prototype);