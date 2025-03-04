'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['mate'])).toBeInstanceOf(Array);
  });

  it(`should return an empty string and string
    if original array consists of an empty string and string`, () => {
    expect(arrayReverse(['', 'Academy'])).toEqual(['', 'ymedacA']);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return an reverse string ['ymed', 'acAetaM']
    if original array consists  string ['Mate', 'Academy']`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return an string ['yado', 'Tya', 'DdooG']
    if original array consists of an string ['Good', 'Day', 'Today']`, () => {
    expect(arrayReverse(['Good', 'Day', 'Today']))
      .toEqual(['yado', 'Tya', 'DdooG']);
  });

  it(`should return an string ['!', 'tn', 'e', 'dutsamaI']
    if original array
    consists of an string ['I', 'am', 'a', 'student!']`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should return an string ['ymedacAetaM']
    if original array consists of an string ['MateAcademy']`, () => {
    expect(arrayReverse(['MateAcademy'])).toEqual(['ymedacAetaM']);
  });

  it(`should return an string ['321%$#ac', 'AdrowssaP']
    if original array consists of an string ['Password', 'Aca#$%123']`, () => {
    expect(arrayReverse(['Password', 'Aca#$%123']))
      .toEqual(['321%$#ac', 'AdrowssaP']);
  });

  it(`should return an string ['7894', '321']
    if original array consists of an string ['1234', '987']`, () => {
    expect(arrayReverse(['1234', '987']))
      .toEqual(['7894', '321']);
  });
});
