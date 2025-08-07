'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(['abc']);

    expect(Array.isArray(result)).toBe(true);
  });

  it(`should return the reversed content and reversed order`,
    () => {
      expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
    });

  it(`should return an empty array if input is empty`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should return an array with a reversed single word`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });

  it(`should reverse characters across multiple strings`,
    () => {
      expect(arrayReverse(['I', 'am', 'a', 'student!']))
        .toEqual(['!', 'tn', 'e', 'dutsamaI']);
    });

  it(`should return strings with the same lengths as original`, () => {
    const input = ['abc', 'defgh', 'ij'];
    const output = arrayReverse(input);
    const inputLengths = input.map(str => str.length);
    const outputLengths = output.map(str => str.length);

    expect(outputLengths).toEqual(inputLengths);
  });

  it(`should work with special characters and numbers`, () => {
    expect(arrayReverse(['1$', '@bC3', '!!'])).toEqual(['!!', '3Cb@', '$1']);
  });

  it(`should handle input with empty strings`, () => {
    expect(arrayReverse(['abc', '', '123'])).toEqual(['321', '', 'cba']);
  });

  it(`should handle array with a single empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should handle array of only empty strings`, () => {
    expect(arrayReverse(['', '', ''])).toEqual(['', '', '']);
  });

  it(`should handle a long single string`, () => {
    expect(arrayReverse(['This is a test sentence.']))
      .toEqual(['.ecnetnes tset a si sihT']);
  });
});
