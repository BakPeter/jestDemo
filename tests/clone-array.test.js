const cloneArray = require("../js/clone-array");

var arr = [1, 2, 3];
test("properly clones array", () => {
  expect(cloneArray(arr)).toEqual(arr);
  expect(cloneArray(arr)).not.toBe(arr);
});
