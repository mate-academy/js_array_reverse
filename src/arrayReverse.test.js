'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Mate'])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it('should return the reversed string', () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });

  it(
    'should reverse both the order of the strings and ' +
      'the characters within each string',
    () => {
      expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
    }
  );

  it('should reverse more than one string', () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!'])).toEqual([
      '!',
      'tn',
      'e',
      'dutsamaI',
    ]);
  });

  it(
    'should reverse both the order of the strings' +
      'and the characters within each string',
    () => {
      expect(arrayReverse(['I', 'stude'])).toEqual(['e', 'dutsI']);
    }
  );
});

/*
Examples:

```js
arrayReverse(['Hell0']) === ['0lleH'];
arrayReverse(['Mate', 'Academy']) === ['ymed', 'acAetaM'];
arrayReverse(['I', 'am', 'a', 'student!']) === ['!', 'tn', 'e', 'dutsamaI'];
*/
