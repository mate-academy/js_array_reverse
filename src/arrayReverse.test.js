'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should replace spaces normally `, () => {
    expect(arrayReverse(['       xxxx', '    w   ', '       ', '          ']))
      .toEqual(['           ', '        ', ' w    x', 'xxx       ']);
  });

  it(`should return empty array if initial array was empty `, () => {
    expect(arrayReverse([]))
      .toEqual([]);
  });

  it(`should return array of string if
    initial array contain numbers string `, () => {
    expect(arrayReverse(['123', '12322', '1200']))
      .toEqual(['002', '12232', '1321']);
  });

  it(`should return array of string if initial array contain numbers `, () => {
    expect(arrayReverse(['123', '12322', '1200']))
      .toEqual(['002', '12232', '1321']);
  });

  it(`should return array of string of big strings`, () => {
    expect(arrayReverse(['a'.repeat(600), 'b'.repeat(1000)]))
      .toEqual(['b'.repeat(600), 'b'.repeat(400) + 'a'.repeat(600)]);
  });

  it(`should return array of string if array contain one string on it`, () => {
    expect(arrayReverse(['granary'])).toEqual(['yranarg']);
  });

  it(`should return array of string if array contain special symbols`, () => {
    expect(arrayReverse(['!@#', '$%^'])).toEqual(['^%$', '#@!']);
  });
});
