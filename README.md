# 🎨 Ether Theme Generator

> A powerful VS Code theme generator that transforms 40 base colors into complete, professional themes with 500+ color definitions.

## ✨ Features

- **🚀 40 Colors In** → **507 Colors Out** (266 UI + 241 syntax tokens)
- **💎 Pure JavaScript** - No build step, no TypeScript
- **🎯 Type-Safe** - Full JSDoc annotations with IntelliSense
- **📦 Auto-Manifest** - Automatically updates package.json
- **🧪 Test Mode** - Generate without adding to package.json
- **⚡ Fast** - ~100ms per theme generation
- **🔧 Modular** - Clean, maintainable architecture
- **✅ Quality Tools** - ESLint, Prettier, EditorConfig

## 📦 Installation

```bash
npm install
```

## 🚀 Quick Start

```bash
npm start
```

This will:

1. Generate all themes from `themes/base/`
2. Automatically update `package.json` with theme contributions
3. Exclude themes marked with `"test": true`

## 🎨 Creating a New Theme

### Step 1: Create Base Theme

Copy an existing theme:

```bash
cp themes/base/eerie.json themes/base/ocean.json
```

### Step 2: Edit 40 Colors

```json
{
  "name": "Ocean",
  "type": "dark",
  "test": false,

  "darkestBackground": "#0a0e14",
  "editorBackground": "#0f1419",
  "inputBackground": "#151a1f",
  "panelBackground": "#0a0e14",

  "primaryForeground": "#d9d9d9",
  "editorForeground": "#b3b1ad",
  "mutedForeground": "#707a8c",
  "comment": "#5c6773",

  "accentPrimary": "#39bae6",

  "syntaxRed": "#f07178",
  "syntaxBlue": "#59c2ff",
  "syntaxGreen": "#aad94c",
  "syntaxYellow": "#ffb454",
  "syntaxPurple": "#d2a6ff",
  "syntaxOrange": "#ff8f40",
  "syntaxCyan": "#95e6cb",

  "errorColor": "#d95757",
  "warningColor": "#ff8f40",
  "infoColor": "#59c2ff",

  "gitAdded": "#91b362",
  "gitModified": "#e6b450",
  "gitDeleted": "#d96c75",
  "gitConflicting": "#ae8dd1",
  "gitIgnored": "#6c7380",

  "terminalBlack": "#01060e",
  "terminalBrightBlack": "#686868",
  "terminalRed": "#ea6c73",
  "terminalBrightRed": "#f07178",
  "terminalGreen": "#91b362",
  "terminalBrightGreen": "#c2d94c",
  "terminalYellow": "#f9af4f",
  "terminalBrightYellow": "#ffb454",
  "terminalBlue": "#53bdfa",
  "terminalBrightBlue": "#59c2ff",
  "terminalMagenta": "#fae994",
  "terminalBrightMagenta": "#ffee99",
  "terminalCyan": "#90e1c6",
  "terminalBrightCyan": "#95e6cb",
  "terminalWhite": "#c7c7c7",
  "terminalBrightWhite": "#ffffff"
}
```

### Step 3: Generate

```bash
npm start
```

Done! Your theme is generated and added to package.json automatically!

## 🔧 Available Scripts

| Script                      | Description                            |
| --------------------------- | -------------------------------------- |
| `npm start`                 | Generate themes & update package.json  |
| `npm run watch`             | Auto-regenerate on file changes        |
| `npm run lint`              | Check code quality                     |
| `npm run lint:fix`          | Auto-fix code issues                   |
| `npm run format`            | Format all files                       |
| `npm run format:check`      | Check formatting                       |
| `npm run publish:prepare`   | Prepare for publishing                 |
| `npm run publish:extension` | Build & publish to VS Code Marketplace |
| `npm run package`           | Package as .vsix for local testing     |

## 🧪 Test Mode

Set `"test": true` in your theme to generate without adding to package.json:

```json
{
  "name": "Experimental Theme",
  "test": true
  // ... rest of colors
}
```

Perfect for testing color combinations!

## 🎯 Base Color Structure

Each theme requires **40 distinct colors**:

### Backgrounds (4)

- darkestBackground, editorBackground, inputBackground, panelBackground

### Foregrounds (4)

- primaryForeground, editorForeground, mutedForeground, comment

### Accent (1)

- accentPrimary

### Syntax (7)

- syntaxRed, syntaxBlue, syntaxGreen, syntaxYellow, syntaxPurple, syntaxOrange, syntaxCyan

### Status (3)

- errorColor, warningColor, infoColor

### Git (5)

- gitAdded, gitModified, gitDeleted, gitConflicting, gitIgnored

### Terminal (16)

- 8 base colors + 8 bright variants

## 📊 What Gets Generated

| Component    | Count | Description                |
| ------------ | ----- | -------------------------- |
| UI Colors    | 266   | All VS Code UI elements    |
| Token Colors | 241   | Syntax highlighting scopes |
| Total Lines  | ~2000 | Complete theme JSON        |

From just **40 input colors**!

## 🎨 Color Transformations

Uses `colord` for color manipulation:

- **Alpha/Opacity**: Selections, hovers, highlights
- **HSL Adjustments**: Lighten, darken, saturate
- **Color Mixing**: Harmonious intermediate colors

## 📦 Publishing

### Package Extension

```bash
npm run package
```

Creates `.vsix` file for local testing.

### Publish to Marketplace

```bash
npm run publish:extension
```

This will:

1. Generate all themes
2. Lint and format code
3. Package extension
4. Publish to VS Code Marketplace

## 🏗️ Project Structure

```
ether/
├── bin/              # CLI executable
├── lib/              # Core library
│   ├── cli/         # Generation orchestration
│   ├── generators/  # Theme builders (266 UI + 241 tokens)
│   └── utils/       # Color transform, validation, logging
├── scripts/          # Automation (manifest update)
├── themes/
│   ├── base/        # Input: 40 colors each
│   └── generated/   # Output: Complete themes
└── package.json      # VS Code extension manifest
```

## 🔒 Code Quality

- **ESLint**: Enforces code standards
- **Prettier**: Consistent formatting
- **EditorConfig**: Universal editor settings
- **All configured and passing!**

## 📝 Documentation

- **README.md** - This file (complete guide)
- **CHANGELOG.md** - Version history

## 📜 License

MIT

---

**Made with ❤️ for VS Code theme creators**

Transform 40 colors into 500+ professional theme definitions in seconds! 🎨
