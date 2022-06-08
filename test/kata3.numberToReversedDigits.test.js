const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(123456)).toEqual([6, 5, 4, 3, 2, 1]);
  });
});
