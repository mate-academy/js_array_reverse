'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['', ''])).toEqual(['', '']);
  });

  it('should reverse strings', () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it('should reverse strings with special symbols', () => {
    expect(arrayReverse(['1', ' ', '2345', ' 6 ', '7']))
      .toEqual(['7', ' ', '6 54', '32 ', '1']);
  });
});
