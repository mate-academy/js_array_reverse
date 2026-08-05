'use strict';

const arrayReverse = require('./arrayReverse');

describe('arrayReverse', () => {
  test('should reverse one string in array', () => {
    expect(arrayReverse(['Hell0']))
      .toEqual(['0lleH']);
  });

  test('should reverse strings and keep original lengths', () => {
    expect(arrayReverse(['Mate', 'Academy']))
      .toEqual(['ymed', 'acAetaM']);
  });

  test('should work with strings of different lengths', () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  test('should work with numbers and special symbols', () => {
    expect(arrayReverse(['a1!', 'B2']))
      .toEqual(['2B!', '1a']);
  });

  test('should return empty array for empty input', () => {
    expect(arrayReverse([]))
      .toEqual([]);
  });
});
