'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toBeInstanceOf(Array);
    expect(arrayReverse(['Mate', 'Academy'])).toHaveLength(2);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['', 'am'])).toEqual(['', 'ma']);
    expect(arrayReverse(['am', ''])).toEqual(['ma', '']);
    expect(arrayReverse(['', ''])).toEqual(['', '']);
  });

  it(`should does not change length of the strings`, () => {
    const words = ['I', 'am', 'a', 'student!'];

    expect(words[0]).toHaveLength(1);
    expect(words[1]).toHaveLength(2);
    expect(words[2]).toHaveLength(1);
    expect(words[3]).toHaveLength(8);

    const actual = arrayReverse(words);
    const expected = ['!', 'tn', 'e', 'dutsamaI'];

    expect(actual[0]).toHaveLength(1);
    expect(actual[1]).toHaveLength(2);
    expect(actual[2]).toHaveLength(1);
    expect(actual[3]).toHaveLength(8);
    expect(actual).toEqual(expected);
  });

  it(`should work properly with diff arrays`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);

    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);

    expect(arrayReverse(['Hi', 'Mate', 'Academy']))
      .toEqual(['ym', 'edac', 'AetaMiH']);

    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });
});
