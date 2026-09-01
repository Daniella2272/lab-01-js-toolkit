const assert = require("assert");

const {
  capitalize,
  reverse,
  isPalindrome,
  wordCount,
  charCount,
} = require("./stringTransform");

const {
  isNumericArray,
  doubleArr,
  filterEven,
  sum,
  average,
} = require("./arrayTransform");

const { fullName, isAdult, isValidPerson } = require("./objectTransform");

const {
  compose,
  pipe,
  reverseAndCapitalize,
  capitalizeAndReverse,
} = require("./functionComposition");

// String tests
assert.strictEqual(capitalize("hello"), "Hello");
assert.strictEqual(capitalize(""), "");
assert.strictEqual(capitalize(5), "");

assert.strictEqual(reverse("hello"), "olleh");
assert.strictEqual(reverse(""), "");
assert.strictEqual(reverse(null), "");

assert.strictEqual(isPalindrome("madam"), true);
assert.strictEqual(isPalindrome("A man, a plan, a canal: Panama"), true);
assert.strictEqual(isPalindrome(5), false);

assert.strictEqual(wordCount("hello world"), 2);
assert.strictEqual(wordCount("hello   world"), 2);
assert.strictEqual(wordCount(""), 0);

assert.strictEqual(charCount("hello world"), 10);
assert.strictEqual(charCount("hello"), 5);
assert.strictEqual(charCount(null), 0);

// Array tests
assert.deepStrictEqual(doubleArr([1, 2, 3]), [2, 4, 6]);
assert.deepStrictEqual(doubleArr([]), []);
assert.deepStrictEqual(doubleArr("123"), []);

assert.deepStrictEqual(filterEven([0, 2, 3]), [0, 2]);
assert.deepStrictEqual(filterEven([1, 3, 5]), []);
assert.deepStrictEqual(filterEven(null), []);

assert.strictEqual(sum([1, 2, 3]), 6);
assert.strictEqual(sum([]), 0);
assert.strictEqual(sum("123"), 0);

assert.strictEqual(average([2, 4, 6]), 4);
assert.strictEqual(average([]), null);
assert.strictEqual(average(null), null);

assert.strictEqual(isNumericArray([1, 2, 3]), true);
assert.strictEqual(isNumericArray([1, "2", 3]), false);
assert.strictEqual(isNumericArray(null), false);

// Object tests
assert.strictEqual(fullName({ firstName: "John", lastName: "Doe" }), "John Doe");
assert.strictEqual(fullName({ firstName: " John", lastName: " Doe " }), "John Doe");
assert.strictEqual(fullName(null), "");

assert.deepStrictEqual(
  isAdult({ firstName: "John", lastName: "Doe", age: 20, minAge: 18 }),
  { granted: true, message: "Access granted" }
);

assert.deepStrictEqual(
  isAdult({ firstName: "John", lastName: "Doe", age: 15, minAge: 18 }),
  { granted: false, message: "Access denied" }
);

assert.strictEqual(isValidPerson(null, ["firstName"]), false);

// Composition tests
assert.strictEqual(compose(capitalize, reverse)("abc"), "CbA");
assert.strictEqual(pipe(capitalize, reverse)("abc"), "CbA");
assert.strictEqual(reverseAndCapitalize("hello world"), "Dlrow olleh");
assert.strictEqual(capitalizeAndReverse("hello world"), "olleh dlrow");

assert.notStrictEqual(
  reverseAndCapitalize("hello world"),
  capitalizeAndReverse("hello world")
);

console.log("All tests passed!");