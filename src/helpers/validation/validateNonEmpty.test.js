import { validateNonEmpty } from "./validateNonEmpty";
import { describe, test, expect } from "vitest";

describe("validateNonEmpty function", () => {
  test("returns true for non-empty value", () => {
    // Arrange
    const value = "hello";

    // Act
    const result = validateNonEmpty(value);

    // Assert
    expect(result).toBe(true);
  });

  test("returns false for empty value", () => {
    // Arrange
    const value = "";

    // Act
    const result = validateNonEmpty(value);

    // Assert
    expect(result).toBe(false);
  });
});
