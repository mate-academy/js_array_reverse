'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(['a', 'b', 'c']);

    expect(Array.isArray(result)).toBeTruthy();
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it('should keep original length for all words', () => {
    const result = arrayReverse(['Hello', 'all'])

    expect(result[0]).toHaveLength(5)
    expect(result[1]).toHaveLength(3)
    expect(result).toEqual(['llaol', 'leH'])
  })

  it('should keep numbers', () => {
    const result = arrayReverse(['Hell0']);

    expect(result).toEqual(['0lleH'])
  })

  it('should keep special symbols', () => {
    const result = arrayReverse(['I', 'am', 'a', 'student!'])

    expect(result).toEqual(['!', 'tn', 'e', 'dutsamaI'])
  });
});
