'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(Array.isArray(arrayReverse(['']))).toBe(true);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  // write more tests here
  it(`should reverse a single string`, () => {
    expect(arrayReverse(['Hello'])).toEqual(['olleH']);
  });

  it(`should reverse a number`, () => {
    expect(arrayReverse(['12', '3456'])).toEqual(['65', '4321']);
  });

  it(`should leave an empty string between`, () => {
    expect(arrayReverse(['Mate', '', 'Academy']))
      .toEqual(['ymed', '', 'acAetaM']);
  });

  it(`should keep same amount of letters in corresponding strings`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should reverse a special symbols`, () => {
    expect(arrayReverse(['!@', '#$%^'])).toEqual(['^%', '$#@!']);
  });
});
