'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(['Hello', 'World']);

    expect(Array.isArray(result)).toBe(true);
  });

  it(`should reverse the strings in the array 
    and maintain their original lengths`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);

    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should handle an empty array`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should handle an array with an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should handle an array with strings of various lengths`, () => {
    expect(arrayReverse(['abc', 'defgh', 'ijklm']))
      .toEqual(['mlk', 'jihgf', 'edcba']);
  });

  it(`should handle special characters correctly`, () => {
    expect(arrayReverse(['@abc', '123!', '&*()']))
      .toEqual([')(&', '!321', 'cba@']);
  });

  it(`should handle numbers in strings`, () => {
    expect(arrayReverse(['1234', 'abcd', '5678']))
      .toEqual(['8765', 'dcba', '4321']);
  });

  it(`should work with strings containing spaces`, () => {
    expect(arrayReverse(['a b c', 'd e f', 'g h i']))
      .toEqual(['i h g', 'f e d', 'c b a']);
  });

  it(`should handle strings with mixed special characters,
     letters, and numbers`, () => {
    expect(arrayReverse(['abc123', '@#$', 'Hello123!']))
      .toEqual(['!321olleH', '$#@', '321cba']);
  });
});
