let lowdash = require("lodash");

let character = ["a", "b", "c", "d"];

let chunked = lowdash.chunk(character, 2);
console.log(chunked);
console.log(lowdash.difference([2, 1], [2, 3]));

