const {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
} = require("./calculator");

test("add", () => {
  expect(add(5, 5)).toBe(10);
});

test("add", () => {
  expect(add(5, 6, 8)).toBe(19);
});

test("add", () => {
  expect(add(10, 20, 30, 40, 50)).toBe(150);
});

//

test("substract", () => {
  expect(subtract(10, 6)).toBe(4);
});

test("substract", () => {
  expect(subtract(15, 6)).toBe(9);
});

test("multiply", () => {
  expect(multiply(2, 6)).toBe(12);
});

test("power", () => {
  expect(power(2, 3)).toBe(8);
});
