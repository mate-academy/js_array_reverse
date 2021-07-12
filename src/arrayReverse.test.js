'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should return reversed string of array with Latin letters`, () => {
    expect(arrayReverse(['World'])).toEqual(['dlroW']);
  });

  it(`should return reversed strings of array
  saving the length from the original array`, () => {
    expect(arrayReverse(['Here', 'we', 'go', 'again']))
      .toEqual(['niag', 'ao', 'ge', 'wereH']);
  });

  it(`should return reversed strings of array
  with digits`, () => {
    expect(arrayReverse(['11', '222', '33', '444']))
      .toEqual(['44', '433', '22', '211']);
  });

  it(`should return reversed strings of array
  with special symbols`, () => {
    expect(arrayReverse(['@#', '$$%', '!!!', '!*&']))
      .toEqual(['&*', '!!!', '!%$', '$#@']);
  });
});
