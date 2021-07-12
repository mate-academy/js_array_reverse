'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['q1'])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return reversed strings
    if original array consists of one string`, () => {
    expect(arrayReverse(['TK13_'])).toEqual(['_31KT']);
  });

  it(`should return a reverse string elements
  from original array that contains 2 value`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return reversed strings
  if original array consists of strings with different length`, () => {
    expect(arrayReverse(['1', 'qw', '1q@', 'wfdsv24!']))
      .toEqual(['!', '42', 'vsd', 'fw@q1wq1']);
  });

  it(`should return a reverse string elements from original
  array containing spaces`, () => {
    expect(arrayReverse(['asd1 de', 'sd2 !']))
      .toEqual(['! 2dsed', ' 1dsa']);
  });
});
