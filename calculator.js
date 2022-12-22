"use strict";
exports.__esModule = true;
exports.calculator = void 0;
var result = 0;
function calculator(number1, number2, operator) {
    if (operator == '+') {
        result = number1 + number2;
    }
    else if (operator == '-') {
        result = number1 - number2;
    }
    else if (operator == '*') {
        result = number1 * number2;
    }
    else if (operator == '/') {
        result = number1 / number2;
    }
    else if (operator == '%') {
        throw RangeError('Alo');
    }
    return result;
}
exports.calculator = calculator;
