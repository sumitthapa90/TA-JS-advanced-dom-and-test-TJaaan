const index = require("./index");

test("get full name to be john Snow", () => {
  expect(index.getFullName("John", "Snow")).toBe("John", "Snow");
});

test("get full name to be sumit Thapa", () => {
  expect(index.getFullName("Sumit", "Thapa")).toBe("Sumit", "Thapa");
});

test("get full name to be undefined", () => {
  expect(index.getFullName("Sumit", "Thapa")).toBe(undefined);
});

test("get full name to be empty", () => {
  expect(index.getFullName("Sumit", "Thapa")).toBe(undefined);
});

//

test("html is palindrome", () => {
  expect(index.isPalindrome("html")).toBe(true);
});

test("javascript is palindrome", () => {
  expect(index.isPalindrome("javascript")).toBe(true);
});

test("raja is palindrome", () => {
  expect(index.isPalindrome("raja")).toBe(true);
});

test("recever is not palindrome", () => {
  expect(index.isPalindrome("recever")).not.toBe(true);
});

test("kabir is not palindrome", () => {
  expect(index.isPalindrome("kabir")).not.toBe(true);
});

test("honda is not palindrome", () => {
  expect(index.isPalindrome("honda")).not.toBe(true);
});

//

test("circumference of of the circle with radius 7 is 45", () => {
  expect(index.getCircumference(7)).toBe(43);
});

test("circumference of of the circle with radius 5 is 54", () => {
  expect(index.getCircumference(5)).toBe(54);
});

test("circumference of of the circle with radius 8 is 74", () => {
  expect(index.getCircumference(8)).toBe(74);
});

//
test("area based on the radius is 10 is 431", () => {
  expect(index.getArea(10)).toBe("the area is 431");
});

test("area based on the radius is 16 is 631", () => {
  expect(index.getArea(16)).toBe("the area is 631");
});

test("area based on the radius is 12 is 512", () => {
  expect(index.getArea(12)).toBe("the area is 521");
});
