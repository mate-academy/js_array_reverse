'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it('should reverse a single string in the array', () => {
    const result = arrayReverse(['Hell0']);

    expect(result).toEqual(['0lleH']);
  });

  it('should reverse multiple strings in the array', () => {
    const result = arrayReverse(['Mate', 'Academy']);

    expect(result).toEqual(['ymed', 'acAetaM']);
  });

  it('should reverse strings with special characters', () => {
    const result = arrayReverse(['I', 'am', 'a', 'student!']);

    expect(result).toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it('should handle an empty array', () => {
    const result = arrayReverse([]);

    expect(result).toEqual([]);
  });

  it('should handle an array with empty strings', () => {
    const result = arrayReverse(['', '', '']);

    expect(result).toEqual(['', '', '']);
  });

  it('should reverse strings with numbers', () => {
    const result = arrayReverse(['123', '456', '789']);

    expect(result).toEqual(['987', '654', '321']);
  });
});
