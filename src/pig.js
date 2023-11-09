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
                constructor(n, h, w, c, p, b, id) {
                    this.Name = n;
                    this.Height = h;
                    this.Weight = w;
                    this.Category = c;
                    this.Personality = p;
                    this.Breed = b;
                    this.dynamicField = {};
                    this.id = id;
                }
            };
            exports_1("Pig", Pig);
            /// BREEDSS
            exports_1("greyBreeds", greyBreeds = ['British Saddleback', 'Choctaw', 'Hampshire', 'Arapawa Island']);
            exports_1("whiteBreeds", whiteBreeds = ['Danish Landrace', 'Chester', 'Mangalica', 'Bulgarian White']);
            exports_1("chestnutBreeds", chestnutBreeds = ['Kunekune', 'Tameworth', 'Red Wattle', 'Danish Protest']);
            exports_1("blackBreeds", blackBreeds = ['Gascon', 'Canarian', 'Porco-monteiro', 'Guinea Hog', 'Jeju']);
        }
    };
});
