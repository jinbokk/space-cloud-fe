const path = require('path');

const buildEslintCommand = (filenames) => [
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`,
  'tsc -p tsconfig.json --pretty --noEmit',
];

module.exports = {
  '*.{js,jsx,ts,tsx}': ['prettier --write', buildEslintCommand],
};
