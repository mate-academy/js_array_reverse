'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {

  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

    it(`should return an array with reversed string`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });

  it(`should return an array with reversed strings and order`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return an array with reversed strings and order for multiple words`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!'])).toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should return an empty array if the original array is empty`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should return an array with a single empty string if the original array consists of a single empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should handle special characters correctly`, () => {
    expect(arrayReverse(['@#$%', '&*()'])).toEqual(['()&', '%$#@']);
  });

  it(`should handle numbers correctly`, () => {
    expect(arrayReverse(['123', '456'])).toEqual(['654', '321']);
  });
});
