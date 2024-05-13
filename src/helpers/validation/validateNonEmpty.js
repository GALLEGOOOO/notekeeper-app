/**
 * Validate if a value is non-empty (contains at least one character after trimming whitespace)
 *
 * @param {string} value The value to validate
 * @returns {boolean} True if the value is non-empty, otherwise false
 */

export const validateNonEmpty = (value) => {
    return value.trim() !== '';
};
