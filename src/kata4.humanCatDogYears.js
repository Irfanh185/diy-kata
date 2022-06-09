const humanCatDogYears = (number) => {
  if (number < 0) {
    return "error";
  }
  const catYears = 24 + (number - 2) * 4;
  const dogYears = 24 + (number - 2) * 5;
  const resultsArr = [];
  resultsArr.push(number, catYears, dogYears);
  return resultsArr;
};

console.log(humanCatDogYears(38));

module.exports = humanCatDogYears;
