function isNumericArray(arr) {
  return Array.isArray(arr) && arr.every((item) => typeof item === "number" && Number.isFinite(item));
}

function doubleArr(arr) {
  if (!isNumericArray(arr)) {
    return [];
  }

  return arr.map((num) => num * 2);
}

function filterEven(arr) {
  if (!isNumericArray(arr)) {
    return [];
  }

  return arr.filter((num) => num % 2 === 0);
}

function sum(arr) {
  if (!isNumericArray(arr)) {
    return 0;
  }

  return arr.reduce((total, num) => total + num, 0);
}

function average(arr) {
  if (!isNumericArray(arr)) {
    return null;
  }

  if (arr.length === 0) {
    return null;
  }

  return sum(arr) / arr.length;
}

module.exports = {
  isNumericArray,
  doubleArr,
  filterEven,
  sum,
  average,
};