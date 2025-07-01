'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(['Test']);

    expect(Array.isArray(result)).toBe(true);
  });

  it(`should reverse the order and contents of the array strings`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);

    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should handle an array of one empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should handle an array of multiple empty strings`, () => {
    expect(arrayReverse(['', '', ''])).toEqual(['', '', '']);
  });

  it(`should handle a mix of empty and non-empty strings`, () => {
    expect(arrayReverse(['', 'abc', ''])).toEqual(['', 'cba', '']);
  });

  it(`should return an empty array if input is empty`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should handle strings with special characters`, () => {
    expect(arrayReverse(['@b$', '%^&'])).toEqual(['&^%', '$b@']);
  });

  it('should preserve string lengths in reversed output', () => {
    const input = ['I', 'am', 'a', 'student!'];

    // Use original lengths, NOT reversed
    const expectedLengths = input.map(s => s.length);

    const output = arrayReverse([...input]);

    expect(output.map(s => s.length)).toEqual(expectedLengths);
  });
});
