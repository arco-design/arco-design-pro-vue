const path = require('path');
const fs = require('fs-extra');

const templatePath = path.resolve(__dirname, '../arco-design-pro-cra');
const projectPath =
  process.argv[2] || path.resolve(__dirname, '../examples/arco-design-pro-cra');

const maps = {
  'src/components': 'src/components',
  'src/locale': 'src/locale',
  'src/mock': 'src/mock',
  'src/pages': {
    dest: 'src/pages',
    filter: (src) => {
      const ignores = [
        path.resolve(__dirname, '../arco-design-pro-nuxt/src/pages/index.tsx'),
        path.resolve(__dirname, '../arco-design-pro-nuxt/src/pages/_app.tsx'),
        path.resolve(__dirname, '../arco-design-pro-nuxt/src/pages/layout.tsx'),
      ];
      return ignores.indexOf(src) === -1;
    },
  },
  'src/public/assets': 'src/assets',
  'src/store': 'src/store',
  'src/style': 'src/style',
  'src/utils': 'src/utils',
  'src/settings.json': 'src/settings.json',
  'src/routes.ts': 'src/routes.ts',
  'src/declaration.d.ts': 'src/declaration.d.ts',
  'src/context.ts': 'src/context.ts',
  '.eslintrc': '.eslintrc',
  '.eslintignore': '.eslintignore',
  '.stylelintrc': '.stylelintrc',
  '.stylelintignore': '.stylelintignore',
  '.prettierrc': '.prettierrc',
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
      path.resolve(__dirname, '../arco-design-pro-nuxt', src),
      path.resolve(projectPath, maps[src])
    );
  }
  if (typeof maps[src] === 'object') {
    fs.copySync(
      path.resolve(__dirname, '../arco-design-pro-nuxt', src),
      path.resolve(
        __dirname,
        '../examples/arco-design-pro-cra',
        maps[src].dest
      ),
      { filter: maps[src].filter }
    );
  }
  if (fs.existsSync(gitignorePath)) {
    fs.copySync(
      gitignorePath,
      path.resolve(__dirname, '../examples/arco-design-pro-cra/.gitignore')
    );
  } else if (fs.existsSync(gitignorePath2)) {
    fs.copySync(
      gitignorePath2,
      path.resolve(__dirname, '../examples/arco-design-pro-cra/.gitignore')
    );
  }
});
