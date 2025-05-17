/**
 * Formats a multi-line, indented code string into a single line string while preserving indentation.
 * This is useful for presenting code examples in template literals without affecting the actual indentation.
 *
 * @param codeWithIndent - The indented code string, typically from a template literal
 * @returns A single line string with the same indentation when rendered
 */
export function formatCodeString(codeWithIndent: string): string {
  if (!codeWithIndent) return '';

  // Split the string into lines
  const lines = codeWithIndent.split('\n') || [];

  // Remove the first and last lines if they're empty (common in template literals)
  if (lines.length > 0 && lines?.[0]?.trim() === '') lines.shift();
  if (lines.length > 0 && lines?.[lines?.length - 1]?.trim() === '')
    lines.pop();

  // If we have no lines left, return an empty string
  if (lines.length === 0) return '';

  // Find the minimum indentation level (ignoring empty lines)
  const minIndent = lines
    .filter((line) => line.trim().length > 0)
    .reduce((min, line) => {
      const indent = line.match(/^\s*/)?.[0].length || 0;
      return Math.min(min, indent);
    }, Infinity);

  // Remove the common indentation from each line
  return lines
    .map((line) => {
      // For non-empty lines, remove the common indentation
      if (line.trim().length > 0) {
        return line.substring(minIndent);
      }
      // For empty lines, return an empty string
      return '';
    })
    .join('\n');
}
