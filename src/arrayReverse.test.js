'use strict';

describe('arrayReverse', () => {
  const arrayReverse = require('./arrayReverse');

  it('should be declared', () => {
    expect(arrayReverse).tobeDefined();
  });

  it('should reverse the order of the words in the array', () => {
    const words = ['hello', 'world'];
    const reversed = arrayReverse(words);

    expect(reversed).toEqual(['world', 'hello']);
  });

  it(`should return an empty 
string if original array consists of an empty string`, () => {
    const words = ['I am', ''];
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
