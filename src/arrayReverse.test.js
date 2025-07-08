'use strict';

const arrayReverse = require('./arrayReverse');

describe('arrayReverse', () => {
  test('should reverse a single word', () => {
    expect(arrayReverse(['Hell0']))
      .toEqual(['0lleH']);
  });

  test('should reverse two words with different lengths', () => {
    expect(arrayReverse(['Mate', 'Academy']))
      .toEqual(['ymed', 'acAetaM']); // litera A mare e corectă!
  });

  test('should reverse array of many short strings', () => {
    // "IamaStudent!" -> "!tnedutSamaI" -> ['!', 'tn', 'e', 'dutsamaI']
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  test('should return empty array if input is empty', () => {
    expect(arrayReverse([]))
      .toEqual([]);
  });

  test('should reverse strings with special characters and numbers', () => {
    // Input: ['12#$', 'abC!', 'D']
    // Joined: '12#$abC!D'
    // Reversed: 'D!Cba$#21'
    // Split into lengths [4, 4, 1] => ['D!Cb', 'a$#2', '1']
    expect(arrayReverse(['12#$', 'abC!', 'D']))
      .toEqual(['D!Cb', 'a$#2', '1']);
  });

  test('should not mutate total string length', () => {
    const input = ['a', 'bc', 'def'];
    const result = arrayReverse([...input]);

    expect(result.join('').length)
      .toBe(input.join('').length);
  });

  test('should keep original string lengths', () => {
    const input = ['abc', 'de', 'fghi'];
    const result = arrayReverse([...input]);
    const originalLengths = input.map(str => str.length);
    const resultLengths = result.map(str => str.length);

    expect(resultLengths).toEqual(originalLengths);
  });
});
