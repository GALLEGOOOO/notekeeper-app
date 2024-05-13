import { validateType } from "./validateType";
import { describe, test, expect } from "vitest";

describe("validateType function", () => {
  test("returns true for correct type", () => {
    // Arrange
    const value = 123;
    const type = "number";

    // Act
    const result = validateType(value, type);

    // Assert
    expect(result).toBe(true);
  });

  test("returns false for incorrect type", () => {
    // Arrange
    const value = "abc";
    const type = "number";

    // Act
    const result = validateType(value, type);

    // Assert
    expect(result).toBe(false);
  });
});
