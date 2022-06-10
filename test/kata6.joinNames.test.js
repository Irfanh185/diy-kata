const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    const result1 = [
      {
        name: "Bart",
      },
      {
        name: "Lisa",
      },
      {
        name: "Maggie",
      },
    ];
    const result2 = [
      {
        name: "Bart",
      },
      {
        name: "Lisa",
      },
      {
        name: "Maggie",
      },
      {
        name: "Irfan",
      },
    ];
    const result3 = [
      {
        name: "Bart",
      },
      {
        name: "Lisa",
      },
      {
        name: "Maggie",
      },
      {
        name: "Irfan",
      },
      {
        name: "Hina",
      },
    ];
    expect(joinNames(result1)).toEqual("Bart, Lisa & Maggie");
    expect(joinNames(result2)).toEqual("Bart, Lisa, Maggie & Irfan");
    expect(joinNames(result3)).toEqual("Bart, Lisa, Maggie, Irfan & Hina");
  });
});
