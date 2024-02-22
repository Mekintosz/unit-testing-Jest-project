import { calculator } from "./calculator";

test('object functions add, subtract, divide, multiply', () => {
    expect(calculator.add(2, 3)).toEqual(5)
    expect(calculator.subtract(2, 3)).toEqual(-1)
    expect(calculator.divide(15, 5)).toEqual(3)
    expect(calculator.multiply(2, 3)).toEqual(6)
} )