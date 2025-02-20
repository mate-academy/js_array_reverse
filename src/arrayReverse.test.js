'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(['dog', 'cat', 'cat-dog']);

    expect(Array.isArray(result)).toBe(true);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['dog', '', 'cat'])).toEqual(['tac', '', 'god']);
  });

  it('should return the correct result', () => {
    const result = arrayReverse(['1', '22', '333', '4444']);

    expect(result).toEqual(['4', '44', '433', '3221']);
  });

  it('should return empty array if original array is empty', () => {
    expect(arrayReverse([])).toEqual([]);
  });
});
