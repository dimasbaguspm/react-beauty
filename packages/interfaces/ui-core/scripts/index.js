#!/usr/bin/env node
/* eslint-disable */

import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const interfacesDir = path.resolve(__dirname, '../../');

const packages = fs.readdirSync(interfacesDir).filter((pkg) => {
  const pkgJsonPath = path.join(interfacesDir, pkg, 'package.json');
  return (
    fs.existsSync(pkgJsonPath) &&
    fs.statSync(path.join(interfacesDir, pkg)).isDirectory()
  );
});

console.log('Found packages:', packages);

// Check which packages need building (don't have dist folder)
const packagesToBuild = packages.filter((pkg) => {
  const distDir = path.join(interfacesDir, pkg, 'dist');
  return !fs.existsSync(distDir) || fs.readdirSync(distDir).length === 0;
});

// remove ui-core to the end, as it have their own build process
const coreIndex = packagesToBuild.indexOf('ui-core');
if (coreIndex !== -1) {
  packagesToBuild.splice(coreIndex, 1);
} 
console.log('Packages that need building:', packagesToBuild);

// execute build commands sequentially
async function buildPackages(pkgs) {
  for (const pkg of pkgs) {
    const packageName = `@react-beauty/${pkg}`;
    console.log(`Building ${packageName}...`);

    // use spawn to execute yarn workspace build command
    await new Promise((resolve, reject) => {
      const buildProcess = spawn('yarn', ['workspace', packageName, 'build'], {
        stdio: 'inherit',
        shell: true,
      });

      buildProcess.on('close', (code) => {
        if (code === 0) {
          console.log(`Successfully built ${packageName}`);
          resolve();
        } else {
          console.error(
            `Failed to build ${packageName} with exit code ${code}`,
          );
          reject(new Error(`Build failed for ${packageName}`));
        }
      });

      buildProcess.on('error', (err) => {
        console.error(`Error building ${packageName}:`, err);
        reject(err);
      });
    });
  }
}

async function main() {
  if (packagesToBuild.length === 0) {
    console.log('All packages already have dist folders. Nothing to build.');
    return;
  }

  try {
    await buildPackages(packagesToBuild);
    console.log('All packages have been built successfully!');
  } catch (error) {
    console.error('Build process failed:', error);
    process.exit(1);
  }
}

main();
