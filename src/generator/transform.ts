import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";

// Extend colord with mix plugin
extend([mixPlugin]);

/**
 * Set alpha/opacity on a color
 */
export function withAlpha(color: string, alpha: number): string {
  return colord(color).alpha(alpha).toHex();
}

/**
 * Lighten a color by a given amount (0-1)
 */
export function lighten(color: string, amount: number): string {
  return colord(color).lighten(amount).toHex();
}

/**
 * Darken a color by a given amount (0-1)
 */
export function darken(color: string, amount: number): string {
  return colord(color).darken(amount).toHex();
}

/**
 * Saturate a color by a given amount (0-1)
 */
export function saturate(color: string, amount: number): string {
  return colord(color).saturate(amount).toHex();
}

/**
 * Desaturate a color by a given amount (0-1)
 */
export function desaturate(color: string, amount: number): string {
  return colord(color).desaturate(amount).toHex();
}

/**
 * Mix two colors with a given ratio (0-1)
 * ratio 0 = all color1, ratio 1 = all color2, ratio 0.5 = 50/50
 */
export function mix(color1: string, color2: string, ratio: number): string {
  return colord(color1).mix(color2, ratio).toHex();
}

/**
 * Convert color to fully opaque hex
 */
export function toHex(color: string): string {
  return colord(color).toHex();
}

/**
 * Get RGB values from a color
 */
export function toRgb(color: string) {
  return colord(color).toRgb();
}

/**
 * Get HSL values from a color
 */
export function toHsl(color: string) {
  return colord(color).toHsl();
}

/**
 * Check if a color is valid
 */
export function isValid(color: string): boolean {
  return colord(color).isValid();
}

