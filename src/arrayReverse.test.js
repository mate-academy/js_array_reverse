'use strict';

describe('arrayReverse', () => {
  const arrayReverse = require('./arrayReverse');

  it('should be declared', () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it('should reverse the order of the words in the array', () => {
    const words = ['hello', 'world'];
    const reversed = arrayReverse(words);

    expect(reversed).toEqual(['dlrow', 'olleh']);
  });

  it(`should return an empty 
string if original array consists of an empty string`, () => {
    const words = [''];
    const reversed = arrayReverse(words);

    expect(reversed).toEqual(['']);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['hello'])).toBeInstanceOf(Array);
  });

  it('should not modify each words length', () => {
    const words = ['I', 'am', 'a', 'student!'];
    const reversed = arrayReverse(words);

    expect(reversed).toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });
});
