/**
 * Combines multiple class names into a single string.
 * Supports strings, conditional objects, and arrays of classes.
 */
export function cn(
  ...inputs: (string | undefined | null | boolean | Record<string, boolean | undefined | null>)[]
): string {
  const classes: string[] = [];

  for (const input of inputs) {
    if (!input) continue;

    if (typeof input === 'string') {
      classes.push(input);
    } else if (typeof input === 'object') {
      for (const [key, value] of Object.entries(input)) {
        if (value) {
          classes.push(key);
        }
      }
    }
  }

  return classes.filter(Boolean).join(' ');
}
