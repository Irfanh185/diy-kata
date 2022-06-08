const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(123456)).toEqual([6, 5, 4, 3, 2, 1]);
    expect(numberToReversedDigits(321123)).toEqual([3, 2, 1, 1, 2, 3]);
    expect(numberToReversedDigits(578798)).toEqual([8, 9, 7, 8, 7, 5]);
  });
});
