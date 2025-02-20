'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const res = arrayReverse(['hello', 'world']);

    expect(Array.isArray(res)).toBeTruthy();
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should preserve the original length of each string`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it('should reverse a single word in the array', () => {
    expect(arrayReverse(['Hello'])).toEqual(['olleH']);
  });
});
