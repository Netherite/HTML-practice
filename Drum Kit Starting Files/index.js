//figuring out how many buttons have the class .drum and saving that number to numberOfDrumButtons 
var numberOfDrumButtons = document.querySelectorAll(".drum").length; 

//Creating a loop that will iterate through all instances of .drum button
for(var i = 0; i < numberOfDrumButtons; i++){
    //selecting all elements with .drum class, using i in place of that array, then adding event listener with click event and anonymous function that creates an alert
    document.querySelectorAll('.drum')[i].addEventListener("click", function handleClick(){
        alert("I got clicked"); 
    }); 
}

//adding event listener to button


 