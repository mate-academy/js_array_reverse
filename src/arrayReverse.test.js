'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(['Hello']);

    expect(result).toBeInstanceOf(Array);
  });

  it(`should return an empty string 
  if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should be case sensetive`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return ['!', 'tn', 'e', 'dutsamaI'],
  if array is ['I', 'am', 'a', 'student!']`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should accept numbers`, () => {
    expect(arrayReverse(['1234', '5678'])).toEqual(['8765', '4321']);
  });

  it(`should accept special symbols`, () => {
    expect(arrayReverse(['~><}', '¬&*%'])).toEqual(['%*&¬', '}<>~']);
  });

  it(`should accept Latin letters`, () => {
    expect(arrayReverse(['hello'])).toEqual(['olleh']);
  });

  // write more tests here
});
