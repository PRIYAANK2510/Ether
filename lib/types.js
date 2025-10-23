/**
 * @typedef {Object} BaseThemeTokens
 * @property {string} name - Theme name
 * @property {'dark'|'light'} type - Theme type
 * @property {boolean} test - If true, exclude from package.json contributes
 *
 * @property {string} darkestBackground - Sidebar, activity bar, status bar
 * @property {string} editorBackground - Main editor, active tabs
 * @property {string} inputBackground - Inputs, dropdowns, widgets
 * @property {string} panelBackground - Panels, notifications
 *
 * @property {string} primaryForeground - Main UI text
 * @property {string} editorForeground - Editor code text
 * @property {string} mutedForeground - Secondary text, inactive states
 * @property {string} comment - Comments
 *
 * @property {string} accentPrimary - Main theme accent color
 *
 * @property {string} syntaxRed - Variables, tags, identifiers
 * @property {string} syntaxBlue - Functions, methods
 * @property {string} syntaxGreen - Strings
 * @property {string} syntaxYellow - Classes, types, namespaces
 * @property {string} syntaxPurple - Keywords, storage
 * @property {string} syntaxOrange - Numbers, constants
 * @property {string} syntaxCyan - Operators, support
 *
 * @property {string} errorColor - Error messages
 * @property {string} warningColor - Warnings
 * @property {string} infoColor - Info messages
 *
 * @property {string} gitAdded - Added files
 * @property {string} gitModified - Modified files
 * @property {string} gitDeleted - Deleted files
 * @property {string} gitConflicting - Conflicts
 * @property {string} gitIgnored - Ignored files
 *
 * @property {string} terminalBlack
 * @property {string} terminalBrightBlack
 * @property {string} terminalRed
 * @property {string} terminalBrightRed
 * @property {string} terminalGreen
 * @property {string} terminalBrightGreen
 * @property {string} terminalYellow
 * @property {string} terminalBrightYellow
 * @property {string} terminalBlue
 * @property {string} terminalBrightBlue
 * @property {string} terminalMagenta
 * @property {string} terminalBrightMagenta
 * @property {string} terminalCyan
 * @property {string} terminalBrightCyan
 * @property {string} terminalWhite
 * @property {string} terminalBrightWhite
 */

/**
 * @typedef {Object} TokenColorSettings
 * @property {string} [foreground]
 * @property {string} [background]
 * @property {string} [fontStyle]
 */

/**
 * @typedef {Object} TokenColor
 * @property {string} [name]
 * @property {string|string[]} scope
 * @property {TokenColorSettings} settings
 */

/**
 * @typedef {Object.<string, TokenColorSettings>} SemanticTokenColors
 */

/**
 * @typedef {Object.<string, string>} ThemeColors
 */

/**
 * @typedef {Object} VSCodeTheme
 * @property {string} name
 * @property {'dark'|'light'} type
 * @property {boolean} semanticHighlighting
 * @property {SemanticTokenColors} semanticTokenColors
 * @property {TokenColor[]} tokenColors
 * @property {ThemeColors} colors
 */

export {};
