function diceAssignment(funcRandomNumber, imageClass){
    if(randomNumber1 === 1){
        document.querySelector(imageClass).setAttribute("src", "images/dice1.png");
    }
    else if(randomNumber1 === 2){
        document.querySelector(imageClass).setAttribute("src", "images/dice2.png");
    }
    else if(randomNumber1 === 3){
        document.querySelector(imageClass).setAttribute("src", "images/dice3.png");
    }
    else if(randomNumber1 === 4){
        document.querySelector(imageClass).setAttribute("src", "images/dice4.png");
    }
    else if(randomNumber1 === 5){
        document.querySelector(imageClass).setAttribute("src", "images/dice5.png");
    }
    else{
        document.querySelector(imageClass).setAttribute("src", "images/dice6.png");
    }
}

var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var comparison1 = randomNumber1; 
diceAssignment(randomNumber1, ".img1");
randomNumber1 = Math.floor(Math.random() * 6 + 1);
var comparison2 = randomNumber1; 
diceAssignment(randomNumber1, ".img2");


if(comparison1 > comparison2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}
else if(comparison2 > comparison1){
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}

