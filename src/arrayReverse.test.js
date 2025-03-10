'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Hello'])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  // write more tests here
  it(`Should return an array containing Latin letters,
   Arabic numerals and special characters
   if the original array contains them`, () => {
    expect(arrayReverse(['4meandyou!'])).toEqual(['!uoydnaem4']);
  });

  it(`Should return an empty array
   if the original array is empty`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`Should return an array of one element
   if the original array contains one element`, () => {
    expect(arrayReverse(['1'])).toEqual(['1']);
  });

  it(`Should return an array of several elements
   if the original array contains several elements`, () => {
    expect(arrayReverse(['1', '2', 'i', 'm'])).toEqual(['m', 'i', '2', '1']);
  });

  it(`Should return an array of several elements with a string length
   corresponding to the string length of the original arrayould return
    an array of several elements
   if the original array contains several elements`, () => {
    expect(arrayReverse(['12', 'im!', 'miss'])).toEqual(['ss', 'im!', 'mi21']);
  });
});
