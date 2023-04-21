//parent element
const myList = document.getElementById("myList"); 

//new list item using appendChild method (<li>strawberry</li>) 
let newListItem = document.createElement('li'); 
newListItem.textContent = 'Strawberry'; 
myList.appendChild(newListItem); 


//document fragment
const docFrag = document.createDocumentFragment(); 

//create list items and add text
let item1 = document.createElement('li'); 
let item2 = document.createElement('li'); 
console.log(item1); 

item1.textContent = 'Kiwi'; 
item2.textContent = 'Bananas'; 

//append list elements to document frag
docFrag.appendChild(item1); 
docFrag.appendChild(item2); 

console.log(docFrag); 

myList.appendChild(docFrag); 