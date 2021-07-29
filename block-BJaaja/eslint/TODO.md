## Using ESLint

- Create a folder with a `.js` file
- Install and setup the `eslint`
- Go through [https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)
- List 10 bad practices from the link above
- Check if you get error (red underline) in VSCode.
- Comment the bad code and fix it below that

Example:

We have to use const when we decleare a variable insted of var

```js
var a = 1;
var b = 2;
```

When we reassingn the refrence always use let insted of var. and in eslint we can not define the var

```js
var count = 1;
if (true) {
  count += 1;
}
```

Use the literal syntax for object creation. eslint: no-new-object

```js
// bad
const item = new Object();
```

Use computed property names when creating objects with dynamic property names.

Why? They allow you to define all the properties of an object in one place

```js
// bad
const obj = {
  id: 5,
  name: "San Francisco",
};
obj[getKey("enabled")] = true;
```

always use short hand

```js
//bad

const atom = {
  value: 1,

  addValue: function (value) {
    return atom.value + value;
  },
};
```

```js
// bad

const anakinSkywalker = "Anakin Skywalker";
const lukeSkywalker = "Luke Skywalker";

const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};
```

```js
const bad = {
  foo: 3,
  bar: 4,
  "data-blah": 5,
};
```

```js
console.log(object.hasOwnProperty(key));
```

```js
// bad

const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // this mutates `original` ಠ_ಠ
delete copy.a;
```

```js
// bad
const items = new Array();
```

#### Fix the following code given below by following the rules of Airbnb Style Guide. Use ESLint to find the error

1.

```js
var num = 10;

var increaseNumber = () => num++;
var increasePassedNumber = (number) => number++;

var num1 = increaseNumber();
var num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num 2);
```

2.

```js

```

3.

```js
const anakinSkywalker = "Anakin Skywalker";
const lukeSkywalker = "Luke Skywalker";

const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};
```

4.

```js
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}
```
