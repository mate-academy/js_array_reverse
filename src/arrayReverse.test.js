'use strict';

const arrayReverse = require('./arrayReverse');

describe(`Function 'arrayReverse':`, () => {
  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it.each([[['Mate', 'Academy']], [[]], [['Hello!', '123', 'test_case']]])(
    `should return an array`,
    (input) => {
      const result = arrayReverse(input);

      expect(Array.isArray(result)).toBe(true);
    },
  );

  it(`should return reversed input`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  // write more tests here
  it(`should return reversed input`, () => {
    expect(arrayReverse(["What's", 'good,', 'my', 'Dear', 'Mate'])).toEqual([
      'etaMra',
      'eDym,',
      'do',
      "ogs'",
      'tahW',
    ]);
  });

  it.each([
    [[]],
    [['Abc', 'Defg', 'Hijkl', 'Mnopqr']],
    [['The quick brown fox jumps over the lazy dog']],
  ])(`should return a value with the same length as the input`, (input) => {
    const result = arrayReverse(input);

    expect(result.length).toEqual(input.length);
  });

  it(`should return an empty string if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it.each([
    [['Hello!', '123', 'test_case', 'a b c']],
    [['#JS2024', '', 'multi word', "don't", ' ']],
    [['  spacje  ', 'CamelCase', '42!', 'ąęół']],
  ])(
    `should return an array of values with the same length as input values`,
    (input) => {
      const result = arrayReverse(input);

      result.forEach((element, index) => {
        expect(element.length).toBe(input[index].length);
      });
    },
  );
});
