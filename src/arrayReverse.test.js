'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`an empty array was received`, () => {
    const result = arrayReverse([]);

    expect(result).toEqual([]);
  });

  it('reverses every character ', () => {
    const result = arrayReverse(['something']);

    expect(result).toEqual(['gnihtemos']);
  });

  it('reverses every array element', () => {
    const result = arrayReverse(['I', 'am', 'a', 'student!']);

    expect(result).toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`returns an empty string if an array
      with an empty string was passed`, () => {
    const result = arrayReverse(['']);

    expect(result).toEqual(['']);
  });
});
