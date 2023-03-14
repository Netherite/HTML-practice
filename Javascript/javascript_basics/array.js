var guestList = ["sheridan", "megan", "adrian", "david", "britt", "christian", "kenny", "jason", "grace", "jacob"];

var guestCheck = prompt("What is your name? ");
guestCheck = guestCheck.toLowerCase();
console.log(guestCheck);

if (guestList.includes(guestCheck)){
    alert("welcome!");
}
else{
    alert("Sorry, you are not on the guest list."); 
}