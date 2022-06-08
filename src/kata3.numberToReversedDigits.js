const numberToReversedDigits = (number) => {
  //string method converts the number to a string, use Number to convert each string into a number
  const digits = Array.from(String(number), Number);
  digits.reverse();
  console.log(digits);
  return digits;
};

module.exports = numberToReversedDigits;
