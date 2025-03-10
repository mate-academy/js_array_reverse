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
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return an array with reversed string
    if original array is not empty`, () => {
    expect(arrayReverse(['Mate!'])).toEqual(['!etaM']);
  });

  it(`should return an array with the same number of reversed strings  
    as in original array`, () => {
    expect(arrayReverse(['Mate', 'Academy']).length).toEqual(2);
  });

  it(`should return an array with reversed strings and their order so that 
    the length of the strings from the original array does not change`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!'])).toEqual([
      '!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should return an array with reversed strings 
    if original array contains special characters`, () => {
    expect(arrayReverse(['I', 'do', 'wh@t', 'I', 'want!!!'])).toEqual(
      ['!', '!!', 'tnaw', 'I', 't@hwodI']);
  });

  it(`should return an array with reversed strings 
  if original array contains numbers`, () => {
    expect(arrayReverse(['380', '44', '1234567'])).toEqual(
      ['765', '43', '2144083']);
  });
  // write more tests here
});
