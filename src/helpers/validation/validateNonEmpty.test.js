import { validateNonEmpty } from './validateNonEmpty';
import { describe } from '@jest/globals';
import { test } from '@jest/globals';
import { expect } from '@jest/globals';

describe('validateNonEmpty function', () => {
  test('returns true for non-empty value', () => {
    // Arrange
    const value = 'hello';
    
    // Act
    const result = validateNonEmpty(value);
    
    // Assert
    expect(result).toBe(true);
  });

  test('returns false for empty value', () => {
    // Arrange
    const value = '';
    
    // Act
    const result = validateNonEmpty(value);
    
    // Assert
    expect(result).toBe(false);
  });
});
