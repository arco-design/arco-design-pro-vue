const path = require('path');
const fs = require('fs-extra');

const templatePath = path.resolve(__dirname, '../arco-design-pro-vite');
const projectPath =
  process.argv[2] ||
  path.resolve(__dirname, '../examples/arco-design-pro-vite');

const maps = {
  'src/api': 'src/api',
  'src/assets': 'src/assets',
  'src/components': 'src/components',
  'src/config': 'src/config',
  'src/hooks': 'src/hooks',
  'src/layout': 'src/layout',
  'src/locale': 'src/locale',
  'src/mock': 'src/mock',
  'src/router': 'src/router',
  'src/store': 'src/store',
  'src/types': 'src/types',
  'src/utils': 'src/utils',
  'src/views': 'src/views',
  '.eslintrc.js': '.eslintrc.js',
  '.eslintignore': '.eslintignore',
  '.stylelintrc.js': '.stylelintrc.js',
  '.prettierrc.js': '.prettierrc.js',
  'tsconfig.json': 'tsconfig.json',
};

fs.copySync(templatePath, projectPath, {
  filter: (src) => !src.startsWith(path.resolve(templatePath, 'node_modules')),
});

const gitignorePath = path.resolve(
  __dirname,
  '../arco-design-pro-nuxt/gitignore'
);
const gitignorePath2 = path.resolve(
  __dirname,
  '../arco-design-pro-nuxt/.gitignore'
);

Object.keys(maps).forEach((src) => {
  if (typeof maps[src] === 'string') {
    fs.copySync(
      path.resolve(__dirname, '../arco-design-pro-vite', src),
      path.resolve(projectPath, maps[src])
    );
  }
  if (typeof maps[src] === 'object') {
    fs.copySync(
      path.resolve(__dirname, '../arco-design-pro-vite', src),
      path.resolve(projectPath, maps[src].dest),
      { filter: maps[src].filter }
    );
  }
  if (fs.existsSync(gitignorePath)) {
    fs.copySync(gitignorePath, path.resolve(projectPath, '.gitignore'));
  } else if (fs.existsSync(gitignorePath2)) {
    fs.copySync(gitignorePath2, path.resolve(projectPath, '.gitignore'));
  }
});
