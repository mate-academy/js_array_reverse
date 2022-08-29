'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([])).toBeInstanceOf(Array);
  });

  it(`should return reversed array`, () => {
    expect(arrayReverse(['Hello!'])).toEqual(['!olleH']);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should not change the order for palyndrome`, () => {
    expect(arrayReverse(['Wasitacaroracatisaw'])).toEqual(['wasitacaroracatisaW']);
  });

  it(`should work for multiple strings`, () => {
    expect(arrayReverse(['Red', 'Hot'])).toEqual(['toH', 'deR']);
  });

  it(`should return a reversed array with numbers`, () => {
    expect(arrayReverse(['12345'])).toEqual(['54321']);
  });

  it(`should return a reversed array with speials`, () => {
    expect(arrayReverse(['!@#$%'])).toEqual(['%$#@!']);
  });

  it(`should catch error if user is used numeric data type`, () => {
    expect(() => arrayReverse(123)).toThrow();
  });

  it(`should catch error if user is used boolean data type`, () => {
    expect(() => arrayReverse(true)).toThrow();
  });
});
