'use strict';

const arrayReverse = require('./arrayReverse');

it('should be declared', () => {
  expect(arrayReverse).toBeInstanceOf(Function);
});

it('should return an array', () => {
  expect(arrayReverse([])).toEqual([]);
});

it('should handle empty strings', () => {
  expect(arrayReverse(['', '', ''])).toEqual(['', '', '']);
});

it('should reverse a single word', () => {
  expect(arrayReverse(['Python'])).toEqual(['nohtyP']);
});

it('should reverse words in 2-item array', () => {
  expect(arrayReverse(['Go', 'Future'])).toEqual(['er', 'utuFoG']);
});

it('should reverse words in 3-item array', () => {
  expect(arrayReverse(['Data', 'Science', 'Rocks']))
    .toEqual(['skco', 'Recneic', 'SataD']);
});

it('should reverse words in 4-item array', () => {
  expect(arrayReverse(['This', 'is', 'a', 'Dog']))
    .toEqual(['goDa', 'si', 's', 'ihT']);
});

it('should reverse words in 5-item array', () => {
  expect(arrayReverse(['Apple', 'Banana', 'Cherry', 'Date', 'Fig']))
    .toEqual(['giFet', 'aDyrre', 'hCanan', 'aBel', 'ppA']);
});

it('should reverse numbers in 2-item array', () => {
  expect(arrayReverse(['963', '2587'])).toEqual(['785', '2369']);
});

it('should reverse symbols in 2-item array', () => {
  expect(arrayReverse(['@#', '%$*^'])).toEqual(['^*', '$%#@']);
});
