import { readFileSync, writeFileSync, readdirSync } from 'fs';

/**
 * Update package.json with theme contributions
 */
function updateManifest() {
  console.log('\n🔄 Updating package.json manifest...\n');

  // Read package.json
  const pkgPath = 'package.json';
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));

  // Get all base themes
  const baseThemes = readdirSync('themes/base')
    .filter(f => f.endsWith('.json'))
    .map(f => {
      const config = JSON.parse(readFileSync(`themes/base/${f}`, 'utf-8'));
      return {
        filename: f.replace('.json', ''),
        config,
      };
    })
    .filter(t => !t.config.test); // Exclude test themes

  // Generate theme contributions
  const themes = baseThemes.map(({ filename, config }) => ({
    label: `Ether ${config.name}`,
    uiTheme: config.type === 'dark' ? 'vs-dark' : 'vs',
    path: `./themes/generated/${filename}-theme.json`,
  }));

  // Update package.json
  pkg.contributes = {
    themes,
  };

  // Write back
  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), 'utf-8');

  console.log(`✅ Updated package.json with ${themes.length} theme(s):\n`);
  themes.forEach(theme => {
    console.log(`   • ${theme.label} (${theme.uiTheme})`);
  });
  console.log('');
}

updateManifest();
