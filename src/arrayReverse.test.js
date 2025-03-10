'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([''])).toBeInstanceOf(Array);
  });

  it('should return an empty string '
    + 'if original array consists of an empty string', () => {
    const input = [''];
    const expectedOutput = [''];

    expect(arrayReverse(input))
      .toEqual(expectedOutput);
  });

  it('should return an empty array '
    + 'for an empty input', () => {
    const input = [];
    const expectedOutput = [];

    expect(arrayReverse(input))
      .toEqual(expectedOutput);
  });

  it('should reverse a single word', () => {
    const input = ['testing'];
    const expectedOutput = ['gnitset'];

    expect(arrayReverse(input))
      .toEqual(expectedOutput);
  });

  // --------------------------------------------------------------
  it('should reverse long words', () => {
    const input = ['qwertyuiopasdfghjklzxcvbnm',
      'QWERTYUIOPASDFGHJKLZXCVBNM',
    ];
    const expectedOutput = ['MNBVCXZLKJHGFDSAPOIUYTREWQ',
      'mnbvcxzlkjhgfdsapoiuytrewq',
    ];

    expect(arrayReverse(input))
      .toEqual(expectedOutput);
  });

  it('should reverse single-character words', () => {
    const input = ['a', 'b', 'c', 'd'];
    const expectedOutput = ['d', 'c', 'b', 'a'];

    expect(arrayReverse(input))
      .toEqual(expectedOutput);
  });

  it('should reverse non-empty words', () => {
    const input = ['hello', 'world'];
    const expectedOutput = ['dlrow', 'olleh'];

    expect(arrayReverse(input))
      .toEqual(expectedOutput);
  });

  it('should reverse a mix of empty and '
      + 'non-empty words', () => {
    const input = ['', 'hello', '', 'world', ''];
    const expectedOutput = ['', 'dlrow', '', 'olleh', ''];

    expect(arrayReverse(input))
      .toEqual(expectedOutput);
  });

  it('should reverse mixed case words', () => {
    const input = ['HelLo', 'wOrLd'];
    const expectedOutput = ['dLrOw', 'oLleH'];

    expect(arrayReverse(input))
      .toEqual(expectedOutput);
  });

  it('should reverse words with special characters', () => {
    const input = ['@bc', '12', '?!'];
    const expectedOutput = ['!?2', '1c', 'b@'];

    expect(arrayReverse(input))
      .toEqual(expectedOutput);
  });
});
