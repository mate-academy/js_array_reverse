"use strict";

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require("./arrayReverse");

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(["h"])).toBeInstanceOf(Array);
  });

  it(`should reverse all occurences of array`, () => {
    expect(arrayReverse(["mate", "academy"])).toEqual(["ymed", "acaetam"]);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([""])).toEqual([""]);
  });

  it(`should be case-sensitive`, () => {
    expect(arrayReverse(["ABRA", "KAdabra"])).toEqual(["arba", "dAKARBA"]);
  });
});
