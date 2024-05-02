import { expect } from '@jest/globals';
import { validateType } from './validateType';
import { test } from '@jest/globals';

test('validateType returns true for correct type', () => {
  const value = 123;
  const type = 'number';
  expect(validateType(value, type)).toBe(true);
});

test('validateType returns false for incorrect type', () => {
  const value = 'abc';
  const type = 'number';
  expect(validateType(value, type)).toBe(false);
});