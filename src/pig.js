"use strict";
//testing connections 
let message = ("hiiiiii peeepppssss");
console.log(message);
/////////////////////////// NEEDS TO DECLARE ALL TYPESSSSSS ///////////////////////////
// PIG Categories
var PigType;
/////////////////////////// NEEDS TO DECLARE ALL TYPESSSSSS ///////////////////////////
// PIG Categories
(function (PigType) {
    PigType["Grey"] = "Grey";
    PigType["Chestnut"] = "Chestnut";
    PigType["White"] = "White";
    PigType["Black"] = "Black";
})(PigType || (PigType = {}));
// PIG Class
class Pig {
    //ading an id???? based on the number of pigs -> private 
    constructor(n, h, w, c, p) {
        this.name = n;
        this.height = h;
        this.weight = w;
        this.category = c;
        this.personality = p;
        this.dynamicField = {};
        Pig.pigNum++;
    }
}
Pig.pigNum = 0;
