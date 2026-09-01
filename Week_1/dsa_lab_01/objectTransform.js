function isValidPerson(person, requiredKeys) {
  if (
    person === null ||
    Array.isArray(person) ||
    typeof person !== "object"
  ) {
    return false;
  }

  return requiredKeys.every((key) =>
    Object.prototype.hasOwnProperty.call(person, key)
  );
}

function fullName(person) {
  if (!isValidPerson(person, ["firstName", "lastName"])) {
    return "";
  }

  if (
    typeof person.firstName !== "string" ||
    typeof person.lastName !== "string"
  ) {
    return "";
  }

  return `${person.firstName.trim()} ${person.lastName.trim()}`;
}

function isAdult(person) {
  if (!isValidPerson(person, ["firstName", "lastName", "age", "minAge"])) {
    return {
      granted: false,
      message: "Invalid person data",
    };
  }

  const granted =
    typeof person.age === "number" &&
    Number.isFinite(person.age) &&
    typeof person.minAge === "number" &&
    Number.isFinite(person.minAge) &&
    person.age >= person.minAge;

  return {
    granted,
    message: granted ? "Access granted" : "Access denied",
  };
}

module.exports = {
  isValidPerson,
  fullName,
  isAdult,
};