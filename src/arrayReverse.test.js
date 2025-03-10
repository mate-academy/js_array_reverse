'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(['Mate', 'Academy']);

    expect(result).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    const array = [''];
    const result = arrayReverse(array);

    expect(arrayReverse(array)).toEqual(result);
  });

  it(`
    should return '['ymed', 'acAetaM']' if 'words' === ['Mate', 'Academy']
  `, () => {
    const array = ['Mate', 'Academy'];
    const result = arrayReverse(array);

    expect(arrayReverse(array)).toEqual(result);
  });

  it(`
    should return '['0lleH']' if 'words' === '['Hell0']'
  `, () => {
    const array = ['Hell0'];
    const result = arrayReverse(array);

    expect(arrayReverse(array)).toEqual(result);
  });

  it(`
    should return
    '['!', 'tn', 'e', 'dutsamaI']'
    if words === '['I', 'am', 'a', 'student!'])'
  `, () => {
    const array = ['I', 'am', 'a', 'student!'];
    const result = arrayReverse(array);

    expect(arrayReverse(array)).toEqual(result);
  });

  it(`
    should return reversed strings`, () => {
    const array = ['I', 'am', 'a', 'student!'];
    const arrCopy = [...array];
    const result = arrayReverse(array);
    const originalToString = arrCopy.join('');
    const resultToString = result.join('');

    expect(originalToString.split('').reverse().join('')).toEqual(
      resultToString
    );
  });
});
