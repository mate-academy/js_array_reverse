'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse([]);

    expect(result).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it('should have the same size of sub arrays', () => {
    const reversed = arrayReverse(['Mate', 'Academy']);

    const sizesA = ['Mate', 'Academy'].map(x => x.length);
    const sizesB = reversed.map(x => x.length);

    expect(sizesA).toEqual(sizesB);
  });

  it('should reverse correctly words', () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });
});
