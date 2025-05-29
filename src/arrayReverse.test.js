'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([])).toBeInstanceOf(Array);
  });

  it(`should reverse word(s) in the array, (including spaces)`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual([
      'ymed',
      'acAetaM',
    ]);

    expect(arrayReverse(['Hel lo'])).toEqual(['ol leH']);
  });

  it('should correctly reverse array with words of different lengths ', () => {
    const someWords = ['I', 'am', 'a', 'student!'];
    const reversedWords = ['!', 'tn', 'e', 'dutsamaI'];

    expect(arrayReverse(someWords)).toEqual(reversedWords);
  });
});
