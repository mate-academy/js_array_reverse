'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([''])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return a reversed string if original array
  consist of Latin chars`, () => {
    expect(arrayReverse(['Taras'])).toEqual(['saraT']);
  });

  it(`should return a string
    if original array consists of numbers`, () => {
    expect(arrayReverse(['12345'])).toEqual(['54321']);
  });

  it(`should return a reversed string
    if original array contains special characters`, () => {
    expect(arrayReverse(['No', 'You!'])).toEqual(['!u', 'oYoN']);
  });

  it(`should return a reversed array with exact elements length
    if original array has splitted strings`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return a reversed array with exact elements length
    if original array has splitted strings`, () => {
    expect(arrayReverse(['I', 'am', 'a',
      'student!'])).toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });
});
