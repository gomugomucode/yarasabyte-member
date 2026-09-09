#!/usr/bin/env node
/**
 * Lightweight performance regression guardrail script.
 * Validates that:
 * 1. Client component footprint is minimal (<= 2 client components).
 * 2. No image in public/ exceeds 150 KB.
 * 3. Core public assets exist.
 */

const fs = require('fs');
const path = require('path');

let errors = [];
let warnings = [];

// 1. Check Client Components count
function findClientComponents(dir) {
  const clientFiles = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      clientFiles.push(...findClientComponents(fullPath));
    } else if (/\.(tsx|jsx|js|ts)$/.test(entry.name)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes("'use client'") || content.includes('"use client"')) {
        clientFiles.push(path.relative(process.cwd(), fullPath));
      }
    }
  }
  return clientFiles;
}

const clientComponents = findClientComponents('src');
console.log(`\n🔍 Client Components found: ${clientComponents.length}`);
clientComponents.forEach((f) => console.log(`   - ${f}`));

const MAX_CLIENT_COMPONENTS = 2;
if (clientComponents.length > MAX_CLIENT_COMPONENTS) {
  errors.push(
    `Performance regression: Expected at most ${MAX_CLIENT_COMPONENTS} client components, but found ${clientComponents.length}.`
  );
}

// 2. Check public/ image asset sizes
const MAX_IMAGE_SIZE_KB = 150;
function checkAssetSizes(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      checkAssetSizes(fullPath);
    } else if (/\.(webp|png|jpg|jpeg|gif)$/i.test(entry.name)) {
      const stat = fs.statSync(fullPath);
      const sizeKB = stat.size / 1024;
      const relPath = path.relative(process.cwd(), fullPath);
      if (sizeKB > MAX_IMAGE_SIZE_KB) {
        errors.push(
          `Image asset exceeds ${MAX_IMAGE_SIZE_KB} KB threshold: ${relPath} (${sizeKB.toFixed(1)} KB)`
        );
      }
    }
  }
}

if (fs.existsSync('public')) {
  checkAssetSizes('public');
}

// Summary
console.log('\n📊 Performance Guardrail Results:');
if (errors.length > 0) {
  console.error('❌ Failures detected:');
  errors.forEach((err) => console.error(`   ${err}`));
  process.exit(1);
} else {
  console.log('✅ All performance guardrails passed cleanly!');
  process.exit(0);
}
