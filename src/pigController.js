System.register([], function (exports_1, context_1) {
    "use strict";
    var Controller;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Controller = class Controller {
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
                    this.pigs = this.pigs.filter((p) => {
                        return p.Name != name;
                    });
                    localStorage.UserArray = JSON.stringify(this.pigs); // saving in the local storage
                    return this.pigs.length;
                }
                showAll() {
                    // return this.pigs
                    return JSON.parse(localStorage.UserArray);
                }
            };
            exports_1("Controller", Controller);
        }
    };
});
