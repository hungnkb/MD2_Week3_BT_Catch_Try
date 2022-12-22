let result: number = 0;
export function calculator(number1: number, number2: number, operator: string): number {
    if (operator == '+') {
        result = number1 + number2;
    } else if (operator == '-') {
        result = number1 - number2;
    } else if (operator == '*') {
        result = number1 * number2;
    } else if (operator == '/') {
        result = number1 / number2;
    } else if (operator == '%') {
        throw RangeError('Alo')
    }
    return result;
}


