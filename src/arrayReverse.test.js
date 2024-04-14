'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['']))
      .toBeInstanceOf(Array);
  });

  it(`should return an empty array if the input array is empty`, () => {
    expect(arrayReverse([]))
      .toEqual([]);
  });

  it(`should return an array with reversed strings`, () => {
    expect(arrayReverse(['Hell0']))
      .toEqual(['0lleH']);

    expect(arrayReverse(['Mate', 'Academy']))
      .toEqual(['ymed', 'acAetaM']);

    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should reverse if one empty string inserted between other words`, () => {
    expect(arrayReverse(['Mate', '', 'Academy']))
      .toEqual(['ymed', '', 'acAetaM']);
  });
});
