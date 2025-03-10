"use strict";

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require("./arrayReverse");

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(Array.isArray(arrayReverse([]))).toEqual(true);
  });

  it(`should return an empty array if 'words' === []`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([""])).toEqual([""]);
  });

  it(`Should return reversed string if original one exists`, () => {
    expect(arrayReverse(["Mate Academy"])).toEqual(["ymedacA etaM"]);
  });

  it(`Should return the same string if 'words' length is equal 1`, () => {
    expect(arrayReverse(["1"])).toEqual(["1"]);
  });

  it(`Should return the reversed multiple string if 'words' length > 1`, () => {
    expect(arrayReverse(["abc", "def"])).toEqual(["fed", "cba"]);
  });
});
