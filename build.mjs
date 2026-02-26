import { execSync } from 'child_process';
import { cpSync, mkdirSync, rmSync, existsSync } from 'fs';

const templates = [
  'transparency-portal',
  'permit-licensing',
  'citizen-services',
  'legislative-tracker',
  'procurement-portal',
];

// Clean dist
if (existsSync('dist')) rmSync('dist', { recursive: true });
mkdirSync('dist');

// Copy landing page
cpSync('public', 'dist', { recursive: true });

// Build each template
for (const name of templates) {
  console.log(`\nBuilding ${name}...`);
  execSync(`npx vite build --base /${name}/ --outDir ../dist/${name}`, {
    cwd: name,
    stdio: 'inherit',
  });
  console.log(`Done: ${name}`);
}

console.log('\nAll templates built successfully!');
