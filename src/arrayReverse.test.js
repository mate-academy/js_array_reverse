'use strict';

describe(`Функція 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`повинна бути оголошена`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`повинна повертати масив`, () => {
    const result = arrayReverse(['Mate', 'Academy']);
    expect(Array.isArray(result)).toBe(true);
  });

  it(`повинна реверсувати всі літери як одну стрічку, а потім розбивати по довжинах слів`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acemAtA']);
  });

  it(`повинна коректно працювати з порожнім масивом`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`повинна коректно працювати з масивом, що містить порожні рядки`, () => {
    expect(arrayReverse(['', '', ''])).toEqual(['', '', '']);
  });

  it(`повинна коректно працювати з масивом з одним порожнім рядком`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`повинна реверсувати масив з одним словом`, () => {
    expect(arrayReverse(['hello'])).toEqual(['olleh']);
  });

  it(`повинна працювати з масивом слів різної довжини`, () => {
    expect(arrayReverse(['abc', 'de', 'f'])).toEqual(['f', 'ed', 'cba']);
  });
});

