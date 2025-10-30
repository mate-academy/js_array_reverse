"use strict";

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require("./arrayReverse");

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`an empty array
    `, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`1 word`, () => {
    expect(arrayReverse(["Casablanca"])).toEqual(["acnalbasaC"]);
  });

  it(`2 words`, () => {
    expect(arrayReverse(["Mate", "Academy"])).toEqual(["ymed", "acAetaM"]);
  });

  it(`an empty strings
    `, () => {
    expect(arrayReverse(["", "", ""])).toEqual(["", "", ""]);
  });

  it(`an empty string in the beginning
    `, () => {
    expect(arrayReverse(["", "Academy"])).toEqual(["", "ymedacA"]);
  });

  it(`an empty string in the end
    `, () => {
    expect(arrayReverse(["Academy", ""])).toEqual(["ymedacA", ""]);
  });

  it(`an empty string in the middle
    `, () => {
    expect(arrayReverse(["Mate", "", "Academy"])).toEqual([
      "ymed",
      "",
      "acAetaM",
    ]);
  });

  it(`'words' === ['Hell0']`, () => {
    expect(arrayReverse(["Hell0"])).toEqual(["0lleH"]);
  });

  it(`few words`, () => {
    expect(arrayReverse(["I", "am", "a", "student!"])).toEqual([
      "!",
      "tn",
      "e",
      "dutsamaI",
    ]);
  });
});
