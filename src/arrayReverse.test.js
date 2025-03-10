"use strict";

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require("./arrayReverse");

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should handle single-word arrays`, () => {
    expect(arrayReverse(["Hello"])).toEqual(["olleH"]);
  });

  it(`should reverse the strings and their order in the array`, () => {
    expect(arrayReverse(["Mate", "Academy"])).toEqual(["ymed", "acAetaM"]);
  });

  it(`should return an empty array for empty input`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should handle arrays with empty strings`, () => {
    expect(arrayReverse(["", "", ""])).toEqual(["", "", ""]);
  });

  it(`should reverse strings of mixed characters`, () => {
    expect(arrayReverse(["I", "am", "a", "student!"])).toEqual([
      "!",
      "tn",
      "e",
      "dutsamaI",
    ]);
  });

  it(`should return an array of strings of identical characters`, () => {
    expect(arrayReverse(["aaa", "bbb"])).toEqual(["bbb", "aaa"]);
  });

  it(`should correctly reverse strings with numbers and symbols`, () => {
    expect(arrayReverse(["123", "abc!"])).toEqual(["!cb", "a321"]);
    expect(arrayReverse(["!@#", "!$%"])).toEqual(["%$!", "#@!"]);
  });

  it(`should handle strings with spaces correctly`, () => {
    expect(arrayReverse(["a b", "c d"])).toEqual(["d c", "b a"]);
  });
});
