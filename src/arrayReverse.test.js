/* eslint-disable quotes */
"use strict";

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require("./arrayReverse");

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(
      arrayReverse(["1", "3", "4", "123", "125", "Hello dude"]),
    ).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(["Mate", "Academy"])).toEqual(["ymed", "acAetaM"]);
  });

  it(`should be case sensitive `, () => {
    expect(arrayReverse(["SaNtA", "   ", "ClAuS"])).toEqual([
      "SuAlC",
      "   ",
      "AtNaS",
    ]);
  });

  it(`should work with numbers as string`, () => {
    expect(arrayReverse(["Hell0"])).toEqual(["0lleH"]);
  });

  it(`should work with special symbols`, () => {
    expect(arrayReverse(["I", "am", "a", "student!"])).toEqual([
      "!",
      "tn",
      "e",
      "dutsamaI",
    ]);
  });

  it(`should return empty array, if nothing not transferred `, () => {
    expect(arrayReverse([])).toEqual([]);
  });
});
