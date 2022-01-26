const fs = require('fs-extra');
const path = require('path');

fs.copy(
  path.resolve(__dirname, '../arco-design-pro-vite/.gitignore'),
  path.resolve(__dirname, '../arco-design-pro-vite/gitignore'),
  (err) => {
    if (err) return console.error(err);
    console.log('Copy gitignore success!');
  }
);
