const fs = require('fs-extra');
const path = require('path');

fs.removeSync(path.resolve(__dirname, '../arco-design-pro-vite/gitignore'));
