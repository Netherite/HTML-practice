function getMilk(money, costPerBottle) {   
    var numberOfBottles = Math.floor(money / costPerBottle);
    console.log("Number of bottles = " + numberOfBottles);
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy " + numberOfBottles + " bottles of milk.");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    return costPerBottle % 1.5; 

}

getMilk(18, 2);
var change = getMilk(18, 2); 