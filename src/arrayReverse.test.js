'use strict';

const arrayReverse = require('./arrayReverse');

describe(`Function 'arrayReverse':`, () => {
  it('should be declared', () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it('should return an array', () => {
    expect(arrayReverse(['Mate', 'Academy'])).toBeInstanceOf(Array);
  });

  it('should handle empty strings in the array', () => {
    expect(arrayReverse(['', 'Academy'])).toEqual(['', 'ymedacA']);
  });

  it('should return an empty array if original array is empty', () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it('should return an array with reversed strings', () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it('should preserve original array length', () => {
    expect(arrayReverse(['Mate', 'Academy']).length).toEqual(2);
  });

  it('should return an array with empty strings reversed', () => {
    expect(arrayReverse(['', ''])).toEqual(['', '']);
  });

  it('should return an array with a single reversed string', () => {
    expect(arrayReverse(['Mate'])).toEqual(['etaM']);
  });

  it("should handle ['Hell0'] -> ['0lleH']", () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });

  it("should handle ['I','am','a','student!']"
    + "->['!', 'tn', 'e', 'dutsamaI']", () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!'])).toEqual([
      '!',
      'tn',
      'e',
      'dutsamaI',
    ]);
  });

  it("should handle ['A'] -> ['A']", () => {
    expect(arrayReverse(['A'])).toEqual(['A']);
  });
});
