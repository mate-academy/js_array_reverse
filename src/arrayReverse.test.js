'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(['']);

    expect(result).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should keep original length of the first word`, () => {
    const input = ['Mate', 'Academy'];
    const result = arrayReverse(input);

    expect(result[0].length)
      .toBe(4);
  });

  it(`should keep original length of the last word`, () => {
    const input = ['Mate', 'Academy'];
    const result = arrayReverse(input);

    expect(result[1].length)
      .toBe(7);
  });
});
