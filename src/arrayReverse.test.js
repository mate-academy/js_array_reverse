'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(['hello']);

    expect(Array.isArray(result)).toBeTruthy();
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should ignore empty string
  and reverse only where string's length > 0`, () => {
    expect(arrayReverse(['hello', ''])).toEqual(['olleh', '']);
  });

  it(`should return a correct order
if original array consists of strings with spaces and one char `, () => {
    expect(arrayReverse(['.', ' ', '  '])).toEqual([' ', ' ', ' .']);
  });

  it(`should reorder correctly`, () => {
    expect(arrayReverse(['he', 'll', '0'])).toEqual(['0l', 'le', 'h']);
  });

  it(`should reorder correctly when there is one space`, () => {
    expect(arrayReverse(['he', ' ', '0'])).toEqual(['0 ', 'e', 'h']);
  });

  it(`should reorder correctly when there is one empty string`, () => {
    expect(arrayReverse(['he', '', '0'])).toEqual(['0e', '', 'h']);
  });

  it(`should preserve case register`, () => {
    expect(arrayReverse(['Who', 'Are', 'yoU', '?']))
      .toEqual(['?Uo', 'yer', 'Aoh', 'W']);
  });
});
