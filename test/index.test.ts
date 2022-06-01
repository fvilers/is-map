import isMap from "../src/isMap";

describe("isMap", () => {
  test("should return true for a map type", () => {
    expect(isMap(new Map())).toBe(true);
  });

  test("should return false for a non map type", () => {
    expect(isMap({})).toBe(false);
  });
});
