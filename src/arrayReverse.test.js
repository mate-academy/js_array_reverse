'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return an array with strings with the same length`, () => {
    expect(
      arrayReverse(['Mate', 'Academy']).map((word) => word.length)
    ).toEqual([4, 7]);
  });

  it.skip(`should work properly empty strings`, () => {
    expect(arrayReverse(['I', 'am', 'a', '', 'student!'])).toEqual([
      '!',
      '',
      'tn',
      'e',
      'dutsamaI',
    ]);
  });
});
