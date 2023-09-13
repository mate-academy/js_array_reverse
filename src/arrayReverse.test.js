'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {

  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`if the length of the first string is 1,
   and the length of the last is 5,
    then when reversing, the first string in the
     array will contain only the last character
 from the last string.`, () => {
    expect(arrayReverse(['I', 'koral'])).toEqual(['l', 'arokI']);
  });

  it(`should return an "'ymed', 'acAetaM'"
    if original array is "'Mate', 'Academy'"`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return an "'0lleH'"
    if original array is "'Hell0'"`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });

  it(`should return an "'!', 'tn', 'e', 'dutsamaI'"
    if original array is "'I', 'am', 'a', 'student!'"`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });
});
