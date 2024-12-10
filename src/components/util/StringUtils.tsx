/**
 * Converts a string to lowercase and replaces consecutive spaces with a hyphen.
 * @param input - The input string to be transformed.
 * @returns The transformed string.
 */
export function toLowerCaseAndReplaceSpaces(input: string): string {
    return input.toLowerCase().replace(/\s+/g, '-');
}