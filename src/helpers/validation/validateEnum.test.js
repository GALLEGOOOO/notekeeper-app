import { validateEnum } from './validateEnum.js';
import { test } from '@jest/globals';
import { expect } from '@jest/globals';
import { describe } from '@jest/globals';

describe('validateEnum function', () => {
  test('returns true for valid enum value', () => {
    // Arrange
    const validEnumValues = ['pending', 'in progress', 'done'];
    const value = 'pending';
    
    // Act & Assert
    expect(validateEnum(value, validEnumValues)).toBe(true);
  });

  test('returns false for invalid enum value', () => {
    // Arrange
    const validEnumValues = ['pending', 'in progress', 'done'];
    const value = 'invalid';
    
    // Act & Assert
    expect(validateEnum(value, validEnumValues)).toBe(false);
  });
});