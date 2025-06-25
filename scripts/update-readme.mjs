import fs from 'node:fs/promises';
import path from 'node:path';

const readmePath = path.resolve(import.meta.dirname, '..', 'README.md');
const readme = await fs.readFile(readmePath, 'utf-8');

const packageJson = JSON.parse(await fs.readFile(path.resolve(import.meta.dirname, '..', 'package.json'), 'utf-8'));
const simpleIconsVersion = packageJson.devDependencies['simple-icons'];

const replacedReadme = readme
  .replace(/Simple Icons \d+\.\d+\.\d+/g, `Simple Icons ${simpleIconsVersion}`)
  .replace(/\/tag\/\d+\.\d+\.\d+/g, `/tag/${simpleIconsVersion}`);

await fs.writeFile(readmePath, replacedReadme, 'utf-8');
