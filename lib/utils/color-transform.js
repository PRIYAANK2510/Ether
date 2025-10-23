import { colord, extend } from 'colord';
import mixPlugin from 'colord/plugins/mix';

// Extend colord with mix plugin
extend([mixPlugin]);

/**
 * Set alpha/opacity on a color
 * @param {string} color - Hex color string
 * @param {number} alpha - Opacity value (0-1)
 * @returns {string} Hex color with alpha
 */
export function withAlpha(color, alpha) {
  return colord(color).alpha(alpha).toHex();
}

/**
 * Lighten a color by a given amount
 * @param {string} color - Hex color string
 * @param {number} amount - Amount to lighten (0-1)
 * @returns {string} Lightened hex color
 */
export function lighten(color, amount) {
  return colord(color).lighten(amount).toHex();
}

/**
 * Darken a color by a given amount
 * @param {string} color - Hex color string
 * @param {number} amount - Amount to darken (0-1)
 * @returns {string} Darkened hex color
 */
export function darken(color, amount) {
  return colord(color).darken(amount).toHex();
}

/**
 * Saturate a color by a given amount
 * @param {string} color - Hex color string
 * @param {number} amount - Amount to saturate (0-1)
 * @returns {string} Saturated hex color
 */
export function saturate(color, amount) {
  return colord(color).saturate(amount).toHex();
}

/**
 * Desaturate a color by a given amount
 * @param {string} color - Hex color string
 * @param {number} amount - Amount to desaturate (0-1)
 * @returns {string} Desaturated hex color
 */
export function desaturate(color, amount) {
  return colord(color).desaturate(amount).toHex();
}

/**
 * Mix two colors with a given ratio
 * @param {string} color1 - First hex color
 * @param {string} color2 - Second hex color
 * @param {number} ratio - Mix ratio (0=all color1, 1=all color2, 0.5=50/50)
 * @returns {string} Mixed hex color
 */
export function mix(color1, color2, ratio) {
  return colord(color1).mix(color2, ratio).toHex();
}

/**
 * Convert color to fully opaque hex
 * @param {string} color - Color string
 * @returns {string} Hex color
 */
export function toHex(color) {
  return colord(color).toHex();
}

/**
 * Get RGB values from a color
 * @param {string} color - Color string
 * @returns {Object} RGB object
 */
export function toRgb(color) {
  return colord(color).toRgb();
}

/**
 * Get HSL values from a color
 * @param {string} color - Color string
 * @returns {Object} HSL object
 */
export function toHsl(color) {
  return colord(color).toHsl();
}

/**
 * Check if a color is valid
 * @param {string} color - Color string
 * @returns {boolean} True if valid
 */
export function isValid(color) {
  return colord(color).isValid();
}
