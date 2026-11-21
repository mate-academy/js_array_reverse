'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Hello'])).toEqual(['olleH']);
  });

  // eslint-disable-next-line max-len
  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  // eslint-disable-next-line max-len
  it('the lengths of the strings must match the lengths of the strings in the original array', () => {
    const origin = ['I', 'Understand'];
    const result = arrayReverse(origin);

    result.forEach((str, i) => {
      expect(str.length).toBe(origin[i].length);
    });
  });

  // eslint-disable-next-line max-len
  it('should place the last character of a longer string first after reversing', () => {
    const origin = ['I', 'Understand'];
    const result = arrayReverse([...origin]);

    expect(result[0]).toEqual(origin[1].at(-1));
  });

  // eslint-disable-next-line max-len
  it('should correctly reverse characters across multiple strings', () => {
  const origin = ['I', 'Understand'];

  expect(arrayReverse([...origin])).toEqual([
    'd',
    'natsrednUI',
  ]);
});
});
