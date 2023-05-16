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
    if array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return 'A' (original array)
    if array consists of 'A'`, () => {
    expect(arrayReverse(['A'])).toEqual(['A']);
  });

  it(`should return '4321'
    if array consists of '1234'`, () => {
    expect(arrayReverse(['1234'])).toEqual(['4321']);
  });

  it(`should return 'cba', '321'
    if array consists of '123', 'abc'`, () => {
    expect(arrayReverse(['123', 'abc'])).toEqual(['cba', '321']);
  });

  it(`should return '#', '@!', 'ba1'
    if array consists of '1', 'ab', '!@#'`, () => {
    expect(arrayReverse(['1', 'ab', '!@#'])).toEqual(['#', '@!', 'ba1']);
  });
});
