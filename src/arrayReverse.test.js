'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => expect(arrayReverse).toBeDefined());

  it(`should return an array of strings`, () => {
    const result = arrayReverse(['One', 'two']);

    expect(result).toBeInstanceOf(Array);
    result.forEach((word) => expect(typeof word).toBe('string'));
  });

  it(`should return an array of the same length`, () => {
    const array = ['One', 'two', 'three'];

    expect(arrayReverse(array).length).toBe(array.length);
  });

  it(`should return a reversed array containing one word`, () => {
    expect(arrayReverse(['Hello'])).toEqual(['olleH']);
  });

  it(`should return a reversed array containing multiple words`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return '['']' if original array has only empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(
    `should return array of reversed strings consisting of words and numbers`,
    () => {
      expect(arrayReverse(['one1', 'two2', 'three3']))
        .toEqual(['3eer', 'ht2o', 'wt1eno']);
    }
  );

  it(
    `should return array of reversed strings consisting of special symbols`,
    () => {
      expect(arrayReverse(['#@)₴?$0'])).toEqual(['0$?₴)@#']);
    }
  );

  it(
    `should return array without changes if it has only one letter`,
    () => {
      expect(arrayReverse(['a'])).toEqual(['a']);
    }
  );

  it(`should return array with the same length words`, () => {
    const array = ['one1', 'two22', 'three3', 'extremelyLongWord'];
    const result = arrayReverse(array);

    result.forEach((word, i) => expect(array[i].length).toBe(word.length));
  });

  it(`should preserve case when reversing words`, () => {
    const array = ['I', 'am'];
    const result = arrayReverse(array);

    expect(result).toEqual(['m', 'aI']);
  });
});
