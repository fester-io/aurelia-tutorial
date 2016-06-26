System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Welcome;
    return {
        setters:[],
        execute: function() {
            Welcome = (function () {
                function Welcome() {
                    this.heading = 'Welcome to Aurelia!';
                    this.firstName = 'John';
                    this.lastName = 'Doe';
                }
                Object.defineProperty(Welcome.prototype, "fullName", {
                    get: function () {
                        return this.firstName + " " + this.lastName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Welcome.prototype.submit = function () {
                    alert("Welcome, " + this.fullName);
                };
                return Welcome;
            }());
            exports_1("Welcome", Welcome);
        }
    }
});
