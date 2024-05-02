import { validateEnum } from './validateEnum';
import { test } from '@jest/globals';
import { expect } from '@jest/globals';


test('validateEnum returns true for valid enum value', () => {
  const validEnumValues = ['pending', 'in progress', 'done'];
  const value = 'pending';
  expect(validateEnum(value, validEnumValues)).toBe(true);
});

test('validateEnum returns false for invalid enum value', () => {
  const validEnumValues = ['pending', 'in progress', 'done'];
  const value = 'invalid';
  expect(validateEnum(value, validEnumValues)).toBe(false);
});