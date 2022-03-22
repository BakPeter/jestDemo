const sutract = require("../js/subtract");

test("poperly subtract two numbers", () => {
  expect(sutract(1, 2)).toBe(-1);
});
