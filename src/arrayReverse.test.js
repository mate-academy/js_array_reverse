'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Hello'])).toBeInstanceOf(Array);
  });

  it(`should return an empty array if called with empty array`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should reverse a single-element array`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });

  it(`should reverse and redistribute preserving original lengths`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should handle array with mixed-length strings`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should handle array with single-character strings`, () => {
    expect(arrayReverse(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
  });

  it(`should handle array with a single character`, () => {
    expect(arrayReverse(['x'])).toEqual(['x']);
  });

  it(`should handle special characters and numbers`, () => {
    expect(arrayReverse(['1!', 'a@b'])).toEqual(['b@', 'a!1']);
  });
});
