

import * as Model from "./pig";
import Pig = Model.Pig; 
import DynamicFieldMap = Model.DynamicFieldMap;
import PigType = Model.PigType;

interface PigServices {
    add(p:Pig): number;

    delete(id: number): number;

    showAll(): Pig[];
}

export class Controller implements PigServices{
    pigs: Pig[];

    constructor(){
        this.pigs = []
    }

    add (p: Pig): number{
        this.pigs.push(p);
        localStorage.UserArray = JSON.stringify(this.pigs);     // saving in the local storage
        console.log("added piggggg")
        return this.pigs.length;
    }

    delete(id: number): number{
       
        this.pigs = this.pigs.filter((p) =>{
            return p.id != id
        })
        localStorage.UserArray = JSON.stringify(this.pigs);     // saving in the local storage
        return this.pigs.length;
    }

    showAll(): Pig[]{
        // return this.pigs
        return JSON.parse(localStorage.UserArray);
    }
}


// just for testing purposes

// var p = new Controller();


// document.getElementById("add")!.addEventListener('click', function(){
//     var pig = new Pig("piggy", 23, 23, PigType.White, "dude");
//     (pig.dynamicField as DynamicFieldMap[PigType.Grey]).Swimming = 42;
//     p.add(pig);
// });


// document.getElementById("getall")!.addEventListener('click', function(){
//     console.log(p.showAll());
// });

