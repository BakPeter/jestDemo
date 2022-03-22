const sum = require("../js/sum");

test("poperly add two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});
