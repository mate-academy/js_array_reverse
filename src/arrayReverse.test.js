'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(['hello', 'jest']);

    expect(result).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it('should save a length of elements in array', () => {
    const result = arrayReverse(['I', 'am', 'a', 'student!']);

    expect(result[3]).toHaveLength(8);
  });

  it('should work with empty array', () => {
    expect(arrayReverse([])).toEqual([]);
  });
});
