//I have no idea what is going on here 
//Need to study arrow

/* const observer = new IntersectionObserver((entries)) => {
    entries.forEach((entry) => {devicePixelRatio
        consolor.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show'); 
        }
        else {
            entry.target.classList.remove('show'); 
        }
    }); 
   };

const hiddenElements = document.querySelectorAll('.hidden'); 
hiddenElements.forEach((el) => observer.observe(el)); */ 


//arrow function 
const greet = (name) => {
    return "Hello " + name + "!";
}

//regular function 
function myGreet(name) {
    return "Hello " + name + "!"; 
}

let input = prompt("Please enter your name"); 
console.log(myGreet(input)); 
console.log(greet(input));  