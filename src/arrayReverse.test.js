'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Smth'])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return an array with same length as original array`, () => {
    expect(arrayReverse(['Mate', 'Academy']).length).toBe(2);
  });

  it(`should return resulting array where first string has
   same lenght as fisrt string in passed array`, () => {
    const str1 = 'Mate';
    const str2 = 'Academy';
    const resultArray = arrayReverse([str1, str2]);

    expect(resultArray[0].length).toBe(str1.length);
  });

  it(`should return resulting array where second string has
   same lenght as seccond string in passed array`, () => {
    const str1 = 'Mate';
    const str2 = 'Academy';
    const resultArray = arrayReverse([str1, str2]);

    expect(resultArray[1].length).toBe(str2.length);
  });

  it(`should reverse the given strings
  of the original array consists of 2 value`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should reverse the given strings
  of the original array consists of different 5 value`, () => {
    expect(arrayReverse(['I', 'want', 'to', 'go', 'out']))
      .toEqual(['t', 'uoog', 'ot', 'tn', 'awI']);
  });
});
