'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return the reverse array from the input array`, () => {
    expect(arrayReverse(['Bugy'])).toEqual(['yguB']);
  });

  it(`should return the reverse array from the input array which
  consist from two different strings`, () => {
    expect(arrayReverse(['Bugy', 'cockroach'])).toEqual(['hcao', 'rkcocyguB']);
  });

  it(`should return the reverse array from the input array which
  consist from three different strings`, () => {
    expect(arrayReverse(['Bugy', 'cockroach', 'worms']))
      .toEqual(['smro', 'whcaorkco', 'cyguB']);
  });

  it(`should return the reverse array from the input array which
  consist from three different strings with different length`, () => {
    expect(arrayReverse(['Bugy', 'is', 'a', 'cockroach']))
      .toEqual(['hcao', 'rk', 'c', 'ocasiyguB']);
  });

  it(`should return the reverse array from the input array which
  consist from string where are special char and num`, () => {
    expect(arrayReverse(['p/d ? - 33,2%3!'])).toEqual(['!3%2,33 - ? d/p']);
  });
});
