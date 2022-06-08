const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it(" returns the correct string", () => {
    expect(booleanToWord(true)).toBe("Yes");
    expect(booleanToWord(false)).toBe("No");
  });
});
