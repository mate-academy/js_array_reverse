'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([''])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should work with symbols and numbers`, () => {
    expect(arrayReverse(['I', '@m', 'here', 'to', 'ch€ck'])).toEqual([
      'k',
      'c€',
      'hcot',
      'er',
      'ehm@I',
    ]);
  });

  it(`should work with one word inside an array`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });

  it(`should respect the amount of letters in words`, () => {
    expect(arrayReverse(['Good', 'sentence', 'to', 'reverse'])).toEqual([
      'esre',
      'verotecn',
      'et',
      'nesdooG',
    ]);
  });
});
