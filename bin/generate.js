#!/usr/bin/env node

import { generateAllThemes } from '../lib/cli/generator.js';
import { readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

/**
 * Get all base theme names from the themes/base directory
 * @returns {string[]} Array of theme names
 */
function getAllBaseThemes() {
  const baseThemesDir = join(projectRoot, 'themes/base');
  try {
    return readdirSync(baseThemesDir)
      .filter(file => file.endsWith('.json'))
      .map(file => file.replace('.json', ''));
  } catch (error) {
    console.error('Error reading base themes directory:', error.message);
    return [];
  }
}

/**
 * Parse command line arguments
 */
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    themes: [],
    all: false,
    outputDir: undefined,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === '--all' || arg === '-a') {
      options.all = true;
    } else if (arg === '--output' || arg === '-o') {
      options.outputDir = args[++i];
    } else if (arg === '--help' || arg === '-h') {
      printHelp();
      process.exit(0);
    } else if (!arg.startsWith('-')) {
      options.themes.push(arg);
    }
  }

  return options;
}

/**
 * Print help message
 */
function printHelp() {
  console.log(`
Ether Theme Generator - Generate VS Code themes from base configurations

Usage:
  npm run generate [options] [theme-names...]

Options:
  -a, --all              Generate all themes from themes/base/
  -o, --output <dir>     Custom output directory
  -h, --help             Show this help message

Examples:
  npm run generate               Generate all themes
  npm run generate eerie         Generate only eerie theme
  npm run generate eerie gray    Generate eerie and gray themes
  npm run generate --all         Generate all themes explicitly
  npm run generate -o ./dist     Generate to custom directory

Theme names should match the JSON filenames in themes/base/ (without .json)
  `);
}

/**
 * Main CLI entry point
 */
function main() {
  const options = parseArgs();

  // Determine which themes to generate
  let themesToGenerate = options.themes;

  if (options.all || themesToGenerate.length === 0) {
    themesToGenerate = getAllBaseThemes();
    if (themesToGenerate.length === 0) {
      console.error('No base themes found in themes/base/');
      process.exit(1);
    }
  }

  // Generate themes
  const results = generateAllThemes(themesToGenerate, {
    outputDir: options.outputDir,
  });

  // Exit with error code if any generation failed
  if (results.failed > 0) {
    process.exit(1);
  }
}

main();
