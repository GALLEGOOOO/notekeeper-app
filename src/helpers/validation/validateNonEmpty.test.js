import { expect } from '@jest/globals';
import { validateNonEmpty } from './validateNonEmpty';
import { test } from '@jest/globals';

test('validateNonEmpty returns true for non-empty value', () => {
  const value = 'hello';
  expect(validateNonEmpty(value)).toBe(true);
});

test('validateNonEmpty returns false for empty value', () => {
  const value = '';
  expect(validateNonEmpty(value)).toBe(false);
});