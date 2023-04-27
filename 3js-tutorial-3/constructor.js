//a class cannot have more than one constructor method 
//understanding template literals ${} 
/* class playerCharacter {
    constructor() {
        this.name = 'mary'; 
    }
}
*/ 


//======================== Understanding object literals =========================
//an object is a collection of properties and methods that can be accessed and manipulated through a variable. 


// ===== Declaration of variables for magic item properties

//magic item type: 
const wondrousItem = 'Wondrous Item'; 
//rarity 
const common = 'Common'; 
const uncommon = 'Uncommon'; 
const rare = 'Rare'; 
const veryRare = 'Very Rare'; 
const legendary = 'Legendary'; 

//===== creation of a simple object: 
const amuletOfHealth = {
    name: 'Amulet of Health',
    type: wondrousItem,
    rarity: uncommon,
    description: 'Your constitution score is 19 while you wear this amulet. It has no effect on you if your Constitution is already 19 or higher without it.'
} 

//changing property of amulet o f health 
amuletOfHealth.rarity = rare; 
console.log(amuletOfHealth); 

//======================== Understanding constructors =========================
//creating a magic item class

class magicItem {
    constructor(itemName, rarity, type, description){
        this.name = itemName;
        this.rarity = rarity; 
        this.type = type; 
        this.description = description; 
    }
}

//creating alchemy jug
const alchemyJugDescription = "This ceramic jub appears to be able to hold a gallon of liquid and weights 12 poounds whether full or empty."; 
const alchemyJug = new magicItem('Alchemy Jug', uncommon, wondrousItem, alchemyJugDescription); 
console.log(alchemyJug);

const bagOfHoldingDescription = "This bag has an interior space considerably larger than its outside dimensions, roughly 2 feet in diameter at the mouth and 4 feet deep. The bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet. The bag weighs 15 pounds, regardless of its contents. Retrieving an item from the bag requires an action.";
const bagOfHolding = new magicItem('Bag of Holding', uncommon, wondrousItem,bagOfHoldingDescription); 
console.log(bagOfHolding.description);


//D&D player classes

class dndClass {
    constructor(name, hitDice, hp1stLvl, hpHigherlvls, proficiencies){
        this.name = name; 
        this.hitDice = hitDice; 
        this.hp1stLevel = hp1stLvl; 
        this.hpHigherLevels = hpHigherlvls; 
        this.proficiencies = proficiencies; 
    }
}

const barbarian = new dndClass('Barbarian', '1d12 per barbarian level', '12 + constitution modifier', '1d12 (or 7) + constitution modifier per barbarial level after 1st'); 
console.log(barbarian); 
