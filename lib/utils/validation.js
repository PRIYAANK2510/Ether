import { isValid } from './color-transform.js';

/**
 * Required fields for base theme tokens
 */
const REQUIRED_FIELDS = [
  'name',
  'type',
  'darkestBackground',
  'editorBackground',
  'inputBackground',
  'panelBackground',
  'primaryForeground',
  'editorForeground',
  'mutedForeground',
  'comment',
  'accentPrimary',
  'syntaxRed',
  'syntaxBlue',
  'syntaxGreen',
  'syntaxYellow',
  'syntaxPurple',
  'syntaxOrange',
  'syntaxCyan',
  'errorColor',
  'warningColor',
  'infoColor',
  'gitAdded',
  'gitModified',
  'gitDeleted',
  'gitConflicting',
  'gitIgnored',
  'terminalBlack',
  'terminalBrightBlack',
  'terminalRed',
  'terminalBrightRed',
  'terminalGreen',
  'terminalBrightGreen',
  'terminalYellow',
  'terminalBrightYellow',
  'terminalBlue',
  'terminalBrightBlue',
  'terminalMagenta',
  'terminalBrightMagenta',
  'terminalCyan',
  'terminalBrightCyan',
  'terminalWhite',
  'terminalBrightWhite',
];

/**
 * Validate base theme tokens
 * @param {import('../types.js').BaseThemeTokens} tokens - Base theme tokens
 * @returns {{valid: boolean, errors: string[]}}
 */
export function validateBaseTheme(tokens) {
  const errors = [];

  // Check for missing fields
  for (const field of REQUIRED_FIELDS) {
    if (!tokens[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  }

  // Validate type
  if (tokens.type && !['dark', 'light'].includes(tokens.type)) {
    errors.push(`Invalid type: ${tokens.type}. Must be 'dark' or 'light'`);
  }

  // Validate color formats (only check fields that exist and should be colors)
  const colorFields = REQUIRED_FIELDS.filter(f => f !== 'name' && f !== 'type' && f !== 'test');
  for (const field of colorFields) {
    if (tokens[field] && !isValid(tokens[field])) {
      errors.push(`Invalid color for ${field}: ${tokens[field]}`);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Validate generated theme
 * @param {import('../types.js').VSCodeTheme} theme - Generated theme
 * @returns {{valid: boolean, errors: string[]}}
 */
export function validateGeneratedTheme(theme) {
  const errors = [];

  if (!theme.name) errors.push('Missing theme name');
  if (!theme.type) errors.push('Missing theme type');
  if (!theme.colors) errors.push('Missing colors object');
  if (!theme.tokenColors) errors.push('Missing tokenColors array');
  if (!Array.isArray(theme.tokenColors)) errors.push('tokenColors must be an array');

  return {
    valid: errors.length === 0,
    errors,
  };
}
