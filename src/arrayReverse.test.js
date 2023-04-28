'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([])).toBeInstanceOf(Array);
  });

  it(`should return an empty array`
    + ` if original array is empty`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should return an array with empty string`
    + ` if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return an array with reversed word`
    + ` if original array consists one element`, () => {
    expect(arrayReverse(['Academy'])).toEqual(['ymedacA']);
  });

  it(`should return an array with reversed strings`
  + ` and the same length of strings as the original array`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should return an array with a length`
  + ` equal to the length of the original array`, () => {
    const result = arrayReverse(['I', 'am', 'a', 'student!']);

    expect(result.length).toBe(4);
  });
});
