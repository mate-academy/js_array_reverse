'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['a2'])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should accept letters, numbers and special symbols and reverse`, () => {
    expect(arrayReverse(['Mate3', 'Academy%'])).toEqual(['%ymed', 'acA3etaM']);
  });

  it(`should return reverse string if array cconsist 1 string`, () => {
    expect(arrayReverse(['Day'])).toEqual(['yaD']);
  });

  it(`should return reverse string if array consist 2+ strings`, () => {
    expect(arrayReverse(['Day', 'Me', 'Your'])).toEqual(['ruo', 'Ye', 'MyaD']);
  });

  it(`should return reversed elements with spaces included`, () => {
    expect(arrayReverse(['Da y'])).toEqual(['y aD']);
  });
});
