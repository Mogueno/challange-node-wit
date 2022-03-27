const add = require("../../../middleware/calculator/add");
const divide = require("../../../middleware/calculator/divide");
const multiply = require("../../../middleware/calculator/multiply");
const subtract = require("../../../middleware/calculator/subtract");

test("Given 2 numbers, should return sum", () => {
  const result = add(10, 5);
  expect(result).toEqual(15);
});

test("Given 2 numbers, should return division", () => {
  const result = divide(10, 5);
  expect(result).toEqual(2);
});

test("Given 2 numbers, should return multiplication", () => {
  const result = multiply(10, 5);
  expect(result).toEqual(50);
});

test("Given 2 numbers, should return subtraction", () => {
  const result = subtract(10, 5);
  expect(result).toEqual(5);
});
