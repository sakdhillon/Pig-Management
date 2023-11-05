
////// NEEDS TO MODULARIZE THE CODDEEEEE ---- USE IMPORT AND EXPORT AND THEN USE LITE-SERVER

// import * as Model from "./pig";
// import Pig = Model.Pig; 
// import DynamicFieldMap = Model.DynamicFieldMap;
// import PigType = Model.PigType;

interface PigServices {
    add(p:Pig): number;

    delete(name: string): number;

    showAll(): Pig[];
}

class Controller implements PigServices{
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

    delete(name: string): number{
        // trying this for now? followed prof's video
        this.pigs = this.pigs.filter((p) =>{
            return p.name != name
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



// functions for the webpage 

