import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, unlinkSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { buildTheme } from '../generators/theme-builder.js';
import { validateBaseTheme, validateGeneratedTheme } from '../utils/validation.js';
import * as logger from '../utils/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..', '..');

/**
 * Load a base theme configuration
 * @param {string} themeName - Theme name (without extension)
 * @returns {import('../types.js').BaseThemeTokens} Base theme tokens
 */
export function loadBaseTheme(themeName) {
  const themePath = join(projectRoot, `themes/base/${themeName}.json`);

  if (!existsSync(themePath)) {
    throw new Error(`Theme file not found: ${themePath}`);
  }

  const content = readFileSync(themePath, 'utf-8');
  const tokens = JSON.parse(content);

  // Validate base theme
  const validation = validateBaseTheme(tokens);
  if (!validation.valid) {
    throw new Error(`Invalid base theme ${themeName}:\n${validation.errors.join('\n')}`);
  }

  return tokens;
}

/**
 * Write a generated theme to file
 * @param {string} themeName - Theme name for filename
 * @param {import('../types.js').VSCodeTheme} theme - Complete theme object
 * @param {string} [outputDir] - Optional output directory
 */
export function writeTheme(themeName, theme, outputDir = join(projectRoot, 'themes/generated')) {
  // Create output directory if it doesn't exist
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  // Validate generated theme
  const validation = validateGeneratedTheme(theme);
  if (!validation.valid) {
    logger.warn(`Theme validation warnings for ${themeName}:`);
    validation.errors.forEach(err => logger.warn(`  - ${err}`));
  }

  const outputPath = join(outputDir, `${themeName}-theme.json`);
  const content = JSON.stringify(theme, null, 2);
  writeFileSync(outputPath, content, 'utf-8');

  logger.success(`Generated: ${outputPath}`);
}

/**
 * Generate a single theme
 * @param {string} themeName - Base theme name
 * @param {object} [options] - Generation options
 * @param {string} [options.outputDir] - Custom output directory
 * @returns {boolean} Success status
 */
export function generateTheme(themeName, options = {}) {
  try {
    logger.info(`Processing ${themeName}...`);

    // Load base theme
    const baseTheme = loadBaseTheme(themeName);

    // Build complete theme
    const theme = buildTheme(baseTheme);

    // Write to file
    writeTheme(themeName, theme, options.outputDir);

    return true;
  } catch (error) {
    logger.error(`Failed to generate ${themeName}: ${error.message}`);
    return false;
  }
}

/**
 * Clean up orphaned generated theme files
 * @param {string[]} validThemeNames - Array of valid theme names (from base files)
 * @param {string} [outputDir] - Output directory to clean
 */
export function cleanupOrphanedThemes(
  validThemeNames,
  outputDir = join(projectRoot, 'themes/generated')
) {
  if (!existsSync(outputDir)) {
    return; // Nothing to clean
  }

  try {
    const generatedFiles = readdirSync(outputDir)
      .filter(file => file.endsWith('-theme.json'))
      .map(file => file.replace('-theme.json', ''));

    const orphanedFiles = generatedFiles.filter(
      generatedName => !validThemeNames.includes(generatedName)
    );

    if (orphanedFiles.length > 0) {
      logger.info(`Cleaning up ${orphanedFiles.length} orphaned theme file(s)...`);

      for (const orphanedName of orphanedFiles) {
        const filePath = join(outputDir, `${orphanedName}-theme.json`);
        try {
          unlinkSync(filePath);
          logger.info(`Removed: ${filePath}`);
        } catch (error) {
          logger.warn(`Failed to remove ${filePath}: ${error.message}`);
        }
      }

      logger.success(`Cleanup completed!`);
    }
  } catch (error) {
    logger.warn(`Failed to clean up orphaned themes: ${error.message}`);
  }
}

/**
 * Generate all themes from base configurations
 * @param {string[]} themeNames - Array of theme names to generate
 * @param {object} [options] - Generation options
 * @returns {object} Results summary
 */
export function generateAllThemes(themeNames, options = {}) {
  logger.heading('🎨 Ether Theme Generator');
  logger.info('Generating themes from base tokens...\n');

  // Clean up orphaned themes first
  cleanupOrphanedThemes(themeNames, options.outputDir);

  const results = {
    total: themeNames.length,
    successful: 0,
    failed: 0,
    errors: [],
  };

  for (const themeName of themeNames) {
    const success = generateTheme(themeName, options);
    if (success) {
      results.successful++;
    } else {
      results.failed++;
      results.errors.push(themeName);
    }
  }

  // Summary
  console.log('');
  if (results.successful > 0) {
    logger.success(`Generated ${results.successful} theme(s) successfully!`);
  }
  if (results.failed > 0) {
    logger.error(`Failed to generate ${results.failed} theme(s): ${results.errors.join(', ')}`);
  }

  return results;
}
