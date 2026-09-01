const { capitalize, reverse } = require("./stringTransform");

function compose(...fns) {
  return (value) => fns.reduceRight((result, fn) => fn(result), value);
}

function pipe(...fns) {
  return (value) => fns.reduce((result, fn) => fn(result), value);
}

const reverseAndCapitalize = pipe(reverse, capitalize);

module.exports = {
  compose,
  pipe,
  reverseAndCapitalize,
};