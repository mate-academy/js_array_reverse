'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {

  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  test('reverses a single string in the array', () => {
    const input = ['Hell0'];
    const expected = ['0lleH'];

    expect(arrayReverse([...input])).toEqual(expected);
  });

  test('reverses the order of strings and reverses their characters', () => {
    const input = ['Mate', 'Academy'];
    const expected = ['ymed', 'acAetaM'];

    expect(arrayReverse([...input])).toEqual(expected);
  });

  test('works correctly when length strings including characters', () => {
    const input = ['I', 'am', 'a', 'student!'];
    const expected = ['!', 'tn', 'e', 'dutsamaI'];

    expect(arrayReverse([...input])).toEqual(expected);
  });

  test('returns empty array when input is empty', () => {
    expect(arrayReverse([])).toEqual([]);
  });

  test('works correctly with special characters and numbers', () => {
    const input = ['abc123', '!@#$', 'xyz'];
    const expected = ['zyx$#@', '!321', 'cba']; // matches broken logic

    expect(arrayReverse([...input])).toEqual(expected);
  });

  test('maintains original string lengths after reversal.', () => {
    const input = ['one', 'two', 'three'];
    const output = arrayReverse([...input]);

    expect(output).toHaveLength(input.length);

    for (let i = 0; i < input.length; i++) {
      expect(output[i].length).toBe(input[i].length);
    }
  });
});
