'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');
  const cases = [
    {
      words: ['Hell0'],
      expect: ['0lleH'],
    },
    {
      words: ['Mate', 'Academy'],
      expect: ['ymed', 'acAetaM'],
    },
    {
      words: ['I', 'am', 'a', 'student!'],
      expect: ['!', 'tn', 'e', 'dutsamaI'],
    },
  ];

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

  it.each(cases)(
    'should return expected output',
    ({ words, expect: expected }) => {
      expect(arrayReverse([...words])).toEqual(expected);
    }
  );
});
