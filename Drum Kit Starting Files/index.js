var numberOfDrumButtons = document.querySelectorAll(".drum").length; 

function handleEvent(){
    alert("I got clicked!"); 
}

for(let i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleEvent); 
}