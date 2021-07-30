function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function isPalindrome(str) {
  let revereStr = str.spilt("").reverse().join("");
  return str === revereStr;
}

function getCircumfrence(radius) {
  return `The circumference is ${Math.floor(2 * Math.PI * radius)}`;
}

function getArea(radius) {
  return `The area is ${Math.floor(Math.PI * (radius * radius))}`;
}

module.expots = {
  getFullName,
  isPalindrome,
  getCircumfrence,
  getArea,
};
