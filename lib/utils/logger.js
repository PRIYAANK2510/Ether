/**
 * Logger utility with color support
 */

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

/**
 * Log info message
 * @param {string} message
 */
export function info(message) {
  console.log(`${colors.cyan}ℹ${colors.reset} ${message}`);
}

/**
 * Log success message
 * @param {string} message
 */
export function success(message) {
  console.log(`${colors.green}✓${colors.reset} ${message}`);
}

/**
 * Log error message
 * @param {string} message
 */
export function error(message) {
  console.error(`${colors.red}✗${colors.reset} ${message}`);
}

/**
 * Log warning message
 * @param {string} message
 */
export function warn(message) {
  console.warn(`${colors.yellow}⚠${colors.reset} ${message}`);
}

/**
 * Log heading
 * @param {string} message
 */
export function heading(message) {
  console.log(`\n${colors.bright}${colors.blue}${message}${colors.reset}\n`);
}
