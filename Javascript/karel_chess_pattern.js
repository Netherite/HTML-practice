function main(){
    threeRow(); 
    twoRow();
    threeRow();
    twoRow();
    threeRowEnd();
    
 }
 
 //==========move functions==========
 
 function moveUpRightSide(){
    turnLeft(); 
    move();
    turnLeft(); 
 }
 
 function moveUpLeftSide(){
    turnLeft();
    turnLeft();
    turnLeft();
    move();
    turnLeft(); 
    turnLeft();
    turnLeft();
 }
 
 
 //==========three row functions==========
 
 function threeRow(){
    threeRowBeeper();
    threeRowBeeper();
    putBeeper(); 
    moveUpRightSide();
 }
 function threeRowEnd(){
    threeRowBeeper();
    threeRowBeeper();
    putBeeper(); 
 }
 
 function threeRowBeeper(){
    putBeeper();
    move();
    move();
 }
 
 //==========Two row Functions==========
 function twoRow(){
    twoRowPutBeeper();
    move();
    twoRowPutBeeper();
    move();
    moveUpLeftSide();
 }
 
 function twoRowPutBeeper(){
    move();
    putBeeper(); 
 }