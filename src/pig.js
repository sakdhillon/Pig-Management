// PIG Categories
System.register([], function (exports_1, context_1) {
    "use strict";
    var PigType, Pig, greyBreeds, whiteBreeds, chestnutBreeds, blackBreeds;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (PigType) {
                PigType["Grey"] = "Grey";
                PigType["Chestnut"] = "Chestnut";
                PigType["White"] = "White";
                PigType["Black"] = "Black";
            })(PigType || (PigType = {}));
            exports_1("PigType", PigType);
            // PIG Class
            Pig = class Pig {
                //ading an id???? based on the number of pigs -> private 
                constructor(n, h, w, c, p, b) {
                    this.Name = n;
                    this.Height = h;
                    this.Weight = w;
                    this.Category = c;
                    this.Personality = p;
                    this.Breed = b;
                    this.dynamicField = {};
                    this.id = Pig.pigNum;
                    Pig.pigNum++;
                }
            };
            Pig.pigNum = 0;
            exports_1("Pig", Pig);
            /// BREEDSS
            exports_1("greyBreeds", greyBreeds = ['grey']);
            exports_1("whiteBreeds", whiteBreeds = ['white']);
            exports_1("chestnutBreeds", chestnutBreeds = ['chestnuttt']);
            exports_1("blackBreeds", blackBreeds = ['blackk']);
        }
    };
});
