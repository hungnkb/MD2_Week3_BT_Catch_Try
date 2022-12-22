"use strict";
exports.__esModule = true;
exports.RangeError = void 0;
var calculator_1 = require("./calculator");
var RangeError = /** @class */ (function () {
    function RangeError() {
    }
    RangeError.prototype.rangeError = function (number1, number2, operator) {
        try {
            (0, calculator_1.calculator)(number1, number2, operator);
        }
        catch (e) {
            console.log(e);
        }
    };
    return RangeError;
}());
exports.RangeError = RangeError;
var range = new RangeError();
console.log(range.rangeError(1, 2, "%"));
