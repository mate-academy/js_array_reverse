'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toBeInstanceOf(Array);
  });
  
  it('should return an empty array if called with an empty array', () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should return an empty string if original array consists of an empty string`, () => {
    const result = arrayReverse(['']);
    const correctValue = [''];

    expect(result).toEqual(correctValue);
  });

  it(`should return the same number of elements `, () => {
    const result = arrayReverse(['Mate', 'Academy']);

    expect(result).toHaveLength(2);
  });
  
  it(`should return the correct value if the array.length < 5`, () => {
    const result = arrayReverse(['Mate', 'Academy']);
    const correctValue = ['ymed', 'acAetaM'];

    expect(result).toEqual(correctValue);
  });
  
  it('should return the correct value if the array.length > 5', () => {
    const result = arrayReverse(['I', 'am', 'a', 'student', 'at', 'Mate', 'Academy', '!']);
    const correctValue = ['!', 'ym', 'e', 'dacAeta', 'Mt', 'atne', 'dutsama', 'I'];

    expect(result).toEqual(correctValue);
  });
});
