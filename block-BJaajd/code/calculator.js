function add(...numbers) {
  return numbers.reduce((acc, cv) => {
    acc = acc + cv;
    return acc;
  }, 0);
}

function subtract(a, b) {
  return a - b;
}

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function power(a, number) {
  return Math.pow(a, number);
}

function factorial(a) {
  let fact = [];
  for (let i = 0; i < a; i++) {
    fact = fact * i;
  }
  return fact;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
