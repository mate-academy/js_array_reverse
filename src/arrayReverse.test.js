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

  it('should reverse a single string in the array', () => {
    const result = arrayReverse(['Hell0']);
    expect(result).to.deep.equal(['0lleH']);
  });

  it('should reverse strings with different lengths', () => {
    const result = arrayReverse(['I', 'am', 'a', 'student!']);
    expect(result).to.deep.equal(['!', 'tn', 'e', 'dutsamaI']);
  });

  it('should handle an empty array', () => {
    const result = arrayReverse([]);
    expect(result).to.deep.equal([]);
  });

  it('should handle an array with a single empty string', () => {
    const result = arrayReverse(['']);
    expect(result).to.deep.equal(['']);
  });

  it('should handle an array with multiple empty strings', () => {
    const result = arrayReverse(['', '', '']);
    expect(result).to.deep.equal(['', '', '']);
  });

  it('should handle special characters', () => {
    const result = arrayReverse(['@#$', '!*&']);
    expect(result).to.deep.equal(['&*!', '$#@']);
    
  });
});
