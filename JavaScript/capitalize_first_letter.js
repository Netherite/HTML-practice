var name = prompt("Enter your name in all lowercase: "); 
var firstLetter = name.slice(0 , 1); 
var restOfName = name.slice(1, name.length); 
alert("Hello " + firstLetter.toUpperCase() + restOfName);
