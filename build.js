const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/angular-elements-intro/runtime.js',
    './dist/angular-elements-intro/runtime.js',
    './dist/angular-elements-intro/polyfills.js',
    './dist/angular-elements-intro/main.js'
  ];

  await fs.ensureDir('demo');
  await concat(files, 'demo/ngelements.js');
})();
