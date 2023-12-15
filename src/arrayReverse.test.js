'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(['Mate', 'Academy']);

    expect(Array.isArray(result)).toBeTruthy();
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return array with the same length as original array`, () => {
    const array = ['I', 'am', 'a', 'student!'];
    const result = arrayReverse(array);

    expect(array.length === result.length).toBeTruthy();
  });

  it(`should return array with reversed strings`, () => {
    const array = ['I', 'am', 'a', 'student!'];
    const copiedArr = ['I', 'am', 'a', 'student!'];
    const result = arrayReverse(array);
    const firstStr = copiedArr.join('');
    const secondStr = result.join('');

    expect(secondStr.split('').reverse().join('')).toBe(firstStr);
  });
});
