'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {});

  it(`should return an array with an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  // write more tests here
  it(`should return array with same length
    and string order preserved`, () => {
    expect(arrayReverse(['Iryna', 'Shtef'])).toEqual(['fethS', 'anyrI']);
  });

  it(`should return array of same length preserving order,
    using letters and numbers`, () => {
    expect(arrayReverse(['Irina26'])).toEqual(['62anirI']);
  });

  it(`should return array of same length preserving order,
    using letters and special characters`, () => {
    expect(arrayReverse(['!Iryna!', 'SHT'])).toEqual(['THS!any', 'rI!']);
  });

  it(`should return array of same length preserving order,
    using numbers and special characters`, () => {
    expect(arrayReverse(['26!', '!04!'])).toEqual(['!40', '!!62']);
  });
});
