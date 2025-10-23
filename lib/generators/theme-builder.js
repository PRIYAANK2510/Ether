import { generateUIColors } from './ui-colors.js';
import { generateTokenColors, generateSemanticTokenColors } from './all-syntax-tokens.js';

/**
 * Build a complete VS Code theme from base theme tokens
 * @param {import('../types.js').BaseThemeTokens} tokens - Base theme tokens
 * @returns {import('../types.js').VSCodeTheme} Complete VS Code theme
 */
export function buildTheme(tokens) {
  return {
    name: tokens.name,
    type: tokens.type,
    semanticHighlighting: true,
    semanticTokenColors: generateSemanticTokenColors(tokens),
    tokenColors: generateTokenColors(tokens),
    colors: generateUIColors(tokens),
  };
}
