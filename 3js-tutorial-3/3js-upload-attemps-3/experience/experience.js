import * as three from "three"; 

export default class Experience{
    constructor(canvas){
        if(Experience.instance){
            return Experience.instance; 
        }

        Experience.instance = this; 
        this.canvas = canvas; 
    }
}

