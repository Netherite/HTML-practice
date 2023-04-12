class magicWielders {

    constructor(name, race, dndClass, level, age){
        this.name = name; 
        this.race = race; 
        this.dndClass = dndClass; 
        this.level = level; 
        this.age = age; 
    }

    magicMissile(){
        console.log("You cast magic missile!"); 
    }

    shield(){
        console.log("You cast shield"); 
    }

    whatIsThis(){
        return this; 
    }
    
}

let tasha = new magicWielders("Tasha", "Human", "Wizard", 20, 145);
let mordenkainen = new magicWielders("Mordenkainen", "Human", "Wizard", 164, 89);

console.log(tasha.dndClass)