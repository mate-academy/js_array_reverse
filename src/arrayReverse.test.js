'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['asdasd'])).toBeInstanceOf(Array)
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it('should reverse the given strings keeping the initial order', () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!'])).toEqual(['!', 'tn', 'e', 'dutsamaI'])
  });

  it('should not change the initial length', () => {
    expect(['Mate', 'Academy', 'is', 'the', 'best']).toHaveLength(5)
  });
});
