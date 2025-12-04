'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Hell0'])).toStrictEqual(['0lleH']);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    let result = arrayReverse(['Mate', 'Academy']);

    expect(result).toEqual(['ymed', 'acAetaM']);

    result = arrayReverse(['I', 'am', 'a', 'student!']);

    expect(result).toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it('should keep non-empty strings reversed', () => {
    expect(arrayReverse(['', 'Academy'])).toEqual(['', 'ymedacA']);
  });

  it('should reverse only non-empty strings and keep spaces in place', () => {
    let result = arrayReverse([' ', 'Academy']);

    expect(result).toEqual(['y', 'medacA ']);

    result = arrayReverse(['Mate', 'Academy Super ']);

    expect(result).toEqual([' rep', 'uS ymedacAetaM']);

    result = arrayReverse(['  ', ' ']);

    expect(result).toEqual(['  ', ' ']);
  });
});
