'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(Array.isArray(arrayReverse(['abc']))).toBe(true);
  });

  it(`should reverse all characters`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it('should reverse a single word', () => {
    expect(arrayReverse(['JavaScript'])).toEqual(['tpircSavaJ']);
  });

  it('should return an empty array if input is empty', () => {
    expect(arrayReverse([])).toEqual([]);
  });

  // write more tests here
});
