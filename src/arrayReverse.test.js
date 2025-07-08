'use strict';

describe("Function 'arrayReverse':", () => {
  const arrayReverse = require('./arrayReverse');

  it('should be declared', () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it('should return an array', () => {
    const result = arrayReverse(['abc']);

    expect(Array.isArray(result)).toBe(true);
  });

  it('should reverse a single word', () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });

  it('should reverse multiple words keeping their lengths', () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it('should handle an array of multiple small words', () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!'])).toEqual([
      '!',
      'tn',
      'e',
      'dutsamaI',
    ]);
  });

  it('should return arr with empty str if arr consists empty string', () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it('should handle empty array', () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it('should handle array with multiple empty strings', () => {
    expect(arrayReverse(['', '', ''])).toEqual(['', '', '']);
  });

  it('should correctly reverse str with special chars and digits', () => {
    expect(arrayReverse(['12$', '%^&'])).toEqual(['&^%', '$21']);
  });
});
