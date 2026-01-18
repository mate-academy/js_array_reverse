'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(Array.isArray(arrayReverse(['Hell0']))).toBe(true);
  });

  it(`should return an empty array if original array is empty`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should reverse a single string`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });

  it(`should reverse strings and their order (example: Mate + Academy)`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should reverse strings and their
    order (example with different lengths)`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should keep the lengths of strings in
    the same positions as in the original array`, () => {
    const input = ['I', 'am', 'a', 'student!'];
    const expectedLengths = input.map(w => w.length);

    const result = arrayReverse([...input]);
    const resultLengths = result.map(w => w.length);

    expect(resultLengths).toEqual(expectedLengths);
  });

  it(`should handle special symbols and digits`, () => {
    // whole: "ab#12" -> reversed: "21#ba"
    // lengths: [3, 2] => ["21#", "ba"]
    expect(arrayReverse(['ab#', '12'])).toEqual(['21#', 'ba']);
  });

  it(`should return [''] if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should correctly process empty strings inside the array`, () => {
    // whole: "ab" -> reversed: "ba"
    // lengths: [0, 2, 0] => ["", "ba", ""]
    expect(arrayReverse(['', 'ab', ''])).toEqual(['', 'ba', '']);
  });

  it(`should preserve all characters globally (joined result
    equals reversed joined original)`, () => {
    const input = ['Mate', 'Academy', '!!'];
    const originalWhole = input.join('');
    const result = arrayReverse([...input]).join('');

    expect(result).toBe(originalWhole.split('').reverse().join(''));
  });
});
