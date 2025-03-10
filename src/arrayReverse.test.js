"use strict";

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require("./arrayReverse");

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([" ", " "])).toEqual([" ", " "]);
  });

  it(
    `should return '['ymed', 'acAetaM']'` + `if 'words' is ['Mate', 'Academy']`,
    () => {
      expect(arrayReverse(["Mate", "Academy"])).toEqual(["ymed", "acAetaM"]);
    }
  );

  it(
    `should return '['!', 'tn', 'e', 'dutsamaI']'`
      + `if 'words' is ['I', 'am', 'a', 'student!']`,
    () => {
      expect(arrayReverse(["I", "am", "a", "student!"])).toEqual([
        "!",
        "tn",
        "e",
        "dutsamaI",
      ]);
    }
  );
});
