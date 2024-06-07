'use strict';

const { arrayReverse } = require('./arrayReverse');

describe(`Function 'arrayReverse':`, () => {
  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const words = ['Hello'];
    const array = arrayReverse(words);

    expect(array).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should reverse the string`, () => {
    const words = ['Hello'];
    const array = arrayReverse(words);

    expect(array).toEqual(['olleH']);
  });

  it(`reverses string that contains number`, () => {
    const words = ['Hell0'];
    const array = arrayReverse(words);

    expect(array).toEqual(['0lleH']);
  });

  it(`reverses string that contains special symbol`, () => {
    const words = ['Hello!'];
    const array = arrayReverse(words);

    expect(array).toEqual(['!olleH']);
  });

  it(`should reverse the multiple strings`, () => {
    const words = ['Hello', 'world'];
    const array = arrayReverse(words);

    expect(array).toEqual(['dlrow', 'olleH']);
  });

  it(`doesn't change the length of the strings from the original array `
      + `after reversing`, () => {
    const words = ['I', 'am', 'a', 'student!'];
    const array = arrayReverse(words);

    expect(array).toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });
});
