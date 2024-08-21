'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([''])).toBeInstanceOf(Array);
  });

  it('should return an empty string '
    + 'if original array consists of an empty string', () => {
    expect(arrayReverse(['', '']))
      .toEqual(['', '']);
  });

  it('should correctly work with long strings', () => {
    const StringArray = [
      'a',
      'bC',
      'dEf',
      'gHiJ',
      'kLmNo',
      'pQrStU',
      'vWxYz',
      'aBcD',
      'eFg',
      'hI',
    ];

    const ExpectedResult = [
      'I',
      'hg',
      'FeD',
      'cBaz',
      'YxWvU',
      'tSrQpo',
      'NmLkJ',
      'iHgf',
      'EdC',
      'ba',
    ];

    expect(arrayReverse(StringArray))
      .toEqual(ExpectedResult);
  });

  it('should ignore empty strings', () => {
    const StringArray = [
      '',
      'Abc',
      'De',
      '',
    ];

    const ExpectedResult = [
      '',
      'eDc',
      'bA',
      '',
    ];

    expect(arrayReverse(StringArray))
      .toEqual(ExpectedResult);
  });
});
