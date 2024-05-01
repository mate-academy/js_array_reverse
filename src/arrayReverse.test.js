'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([''])).toBeInstanceOf(Array);
  });

  it(`should return an empty array if original array is empty`, () => {
    expect(arrayReverse([])).toEqual([]);
  });
  
  it(`should return reverse array with latin letters`, () => {
    expect(arrayReverse(['Mate', 'Academy']))
      .toEqual(['ymed', 'acAetaM']);
  });
  
  it(`should return reverse array with special characters`, () => {
    expect(arrayReverse(['!@#$%^', '&*()=+-']))
      .toEqual(["-+=)(*", "&^%$#@!"]);
  });
  
  it(`should return reverse array with different lengths`, () => {
    expect(arrayReverse(['I', 'am', 'studying', 'at', 'Mate', 'Academy']))
      .toEqual(['y', 'me', 'dacAetaM', 'ta', 'gniy', 'dutsmaI',]);
  });
});
