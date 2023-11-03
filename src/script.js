"use strict";
//testing connections 
let message = ("hiiiiii peeepppssss");
console.log(message);
// PIG Categories
var PigType;
(function (PigType) {
    PigType["Grey"] = "Grey";
    PigType["Chestnut"] = "Chestnut";
    PigType["White"] = "White";
    PigType["Black"] = "Black";
})(PigType || (PigType = {}));
// PIG Class
class Pig {
    constructor(n, h, w, c, p) {
        this.name = n;
        this.height = h;
        this.weight = w;
        this.category = c;
        this.personality = p;
        this.dynamicField = {};
    }
}
