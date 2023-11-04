"use strict";
class Controller {
    constructor() {
        this.pigs = [];
    }
    add(p) {
        this.pigs.push(p);
        console.log("added piggggg");
        return this.pigs.length;
    }
    delete(name) {
        //didnt' delete anything yet
        return this.pigs.length;
    }
    showAll() {
        return this.pigs;
    }
}
