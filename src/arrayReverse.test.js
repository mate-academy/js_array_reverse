'use strict';
/* eslint-disable max-len */

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const res = arrayReverse(['a']);

    expect(res).toBeInstanceOf(Array);
  });

  it('should return an empty array if the original one is empty', () => {
    const array = [];
    const res = [];

    expect(arrayReverse(array)).toEqual(res);
  });

  it(`should reverse an array
    of the words consists of Latin letters,
    numbers and special symbols`, () => {
    const array1 = ['Mate', 'Academy'];
    const res1 = ['ymed', 'acAetaM'];
    const array2 = ['1,2,', '22!'];
    const res2 = ['!22,', '2,1'];
    const array3 = ['QWErty', '#$%~^'];
    const res3 = ['^~%$#y', 'trEWQ'];
    const array4 = ['Hell0'];
    const res4 = ['0lleH'];

    expect(arrayReverse(array1)).toEqual(res1);
    expect(arrayReverse(array2)).toEqual(res2);
    expect(arrayReverse(array3)).toEqual(res3);
    expect(arrayReverse(array4)).toEqual(res4);
  });

  it(`should keep the length of the strings from the original array`, () => {
    const array1 = ['1', '22', '333', '4444'];
    const res1 = ['4', '44', '433', '3221'];
    const array2 = ['I', 'am', 'a', 'student!'];
    const res2 = ['!', 'tn', 'e', 'dutsamaI'];

    expect(arrayReverse(array1)).toEqual(res1);
    expect(arrayReverse(array2)).toEqual(res2);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    const array1 = ['', 'Mate', '', 'academy'];
    const array2 = ['', '', ''];
    const res1 = ['', 'ymed', '', 'acaetaM'];
    const res2 = ['', '', ''];

    expect(arrayReverse(array1)).toEqual(res1);
    expect(arrayReverse(array2)).toEqual(res2);
  });
});
