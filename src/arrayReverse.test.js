'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(Array.isArray(arrayReverse(['Hello']))).toBe(true);
  });

  it(`should return reversed characters with original word lengths`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
    expect(arrayReverse(['Hello'])).toEqual(['olleH']);
    // eslint-disable-next-line max-len
    expect(arrayReverse(['I', 'am', 'a', 'student!'])).toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should handle array of one empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should handle multiple empty strings`, () => {
    expect(arrayReverse(['', '', ''])).toEqual(['', '', '']);
  });

  it(`should handle an array with mixed empty and non-empty strings`, () => {
    expect(arrayReverse(['a', '', 'b'])).toEqual(['b', '', 'a']);
  });

  it(`should correctly reverse strings with special characters`, () => {
    expect(arrayReverse(['A!', 'B@', '#C'])).toEqual(['C#', '@B', '!A']);
  });

  it(`should not mutate input length of words`, () => {
    const input = ['Hello', 'World'];
    const result = arrayReverse([...input]);

    expect(result[0].length).toBe(input[0].length);
    expect(result[1].length).toBe(input[1].length);
  });

  it(`should handle empty array`, () => {
    expect(arrayReverse([])).toEqual([]);
  });
});
