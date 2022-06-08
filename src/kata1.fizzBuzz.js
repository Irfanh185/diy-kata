const fizzBuzz = (number) => {
  const divisableBy3 = number % 3 === 0;
  const divisableBy5 = number % 5 === 0;
  if (divisableBy3 && divisableBy5) {
    return "FizzBuzz";
  }

  if (divisableBy3) {
    return "Fizz";
  }

  if (divisableBy5) {
    return "Buzz";
  }
  return number;
};

module.exports = fizzBuzz;
