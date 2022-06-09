const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("returns an array of three numbers", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    expect(humanCatDogYears(25)).toEqual([25, 116, 139]);
    expect(humanCatDogYears(60)).toEqual([60, 256, 314]);
    expect(humanCatDogYears(-23)).toEqual("error");
  });
});
