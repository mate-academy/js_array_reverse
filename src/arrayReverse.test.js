'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['1', '1', '1'])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it('should reverses a single word', () => {
    expect(arrayReverse(['Hello'])).toEqual(['olleH']);
  });

  it('should reverses two words and preserves their lengths', () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it('should correctly transforms words of different lengths', () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it('should works with digits and special characters', () => {
    expect(arrayReverse(['12$', '#A!'])).toEqual(['!A#', '$21']);
  });

  it('should returns empty array if input is empty', () => {
    expect(arrayReverse([])).toEqual([]);
  });
});
