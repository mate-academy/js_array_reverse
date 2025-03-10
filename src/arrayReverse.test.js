'use strict';

describe(`Function 'arrayReverse':`, () => {
  const { arrayReverse } = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should return an empty string if the
    original array consists of an empty string`,
  () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it('should reverse a single string in the array', () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });

  it('should reverse each string in the array', () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it('should reverse each string in the array', () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });
});
