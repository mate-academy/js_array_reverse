'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([])).toBeInstanceOf(Array);
  });

  it(`should return an empty string if original array consists of
    an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return the reverse array from the input array`, () => {
    expect(arrayReverse(['Bugy'])).toEqual(['yguB']);
  });

  it(`should return the reverse array from the input array which consists
    of two different strings`, () => {
    expect(arrayReverse(['Bugy', 'cockroach'])).toEqual(['hcao', 'rkcocyguB']);
  });

  it(`should return the reverse array from the input array which consists
    of three different strings`, () => {
    expect(arrayReverse(['Bugy', 'cockroach', 'worms']))
      .toEqual(['smro', 'whcaorkco', 'cyguB']);
  });

  it(`should return the reverse array from the input array which consists
    of three different strings with different length`, () => {
    expect(arrayReverse(['Bugy', 'is', 'a', 'cockroach']))
      .toEqual(['hcao', 'rk', 'c', 'ocasiyguB']);
  });

  it(`should return the reverse array from the input array which consists
    of strings with special chars and numbers`, () => {
    expect(arrayReverse(['p/d ? - 33,2%3!']))
      .toEqual(['!3%2,33 - ? d/p']);
  });

  it(`should return an empty array if input is an empty array`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should return an array with numbers converted to empty strings`, () => {
    expect(arrayReverse([123, 456])).toEqual(['', '']);
  });
});
