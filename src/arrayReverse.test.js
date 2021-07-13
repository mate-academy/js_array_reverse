'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Test'])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return an array with the same length of the 
    strings from the original array`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return an array of reverses string 
    when containing number and special symbols`, () => {
    expect(arrayReverse(['newEmail', 'newemail@gmail.com']))
      .toEqual(['moc.liam', 'g@liamewenliamEwen']);
  });

  it(`should return same count of stings as in origin array`, () => {
    expect(arrayReverse(['cat', 'is', 'gone', '!']).length).toEqual(4);
  });
});
