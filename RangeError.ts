import { calculator } from "./calculator";

export class RangeError {

    rangeError(number1: number, number2: number, operator: string) {
        try {
            calculator(number1, number2, operator)
        }

        catch (e) {
            console.log(e)
        }
    }
}
let range = new RangeError()
console.log(range.rangeError(1, 2, "%"))