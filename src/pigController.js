"use strict";
////// NEEDS TO MODULARIZE THE CODDEEEEE ---- USE IMPORT AND EXPORT AND THEN USE LITE-SERVER
var _a, _b;
class Controller {
    constructor() {
        this.pigs = [];
    }
    add(p) {
        this.pigs.push(p);
        localStorage.UserArray = JSON.stringify(this.pigs); // saving in the local storage
        console.log("added piggggg");
        return this.pigs.length;
    }
    delete(name) {
        // trying this for now? followed prof's video
        this.pigs = this.pigs.filter((p) => {
            return p.name != name;
        });
        localStorage.UserArray = JSON.stringify(this.pigs); // saving in the local storage
        return this.pigs.length;
    }
    showAll() {
        // return this.pigs
        return JSON.parse(localStorage.UserArray);
    }
}
// just for testing purposes
var p = new Controller();
(_a = document.getElementById("create")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var pig = new Pig("piggy", 23, 23, PigType.White, "dude");
    pig.dynamicField.Swimming = 42;
    p.add(pig);
});
(_b = document.getElementById("getall")) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    console.log(p.showAll());
});
