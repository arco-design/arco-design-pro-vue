const path = require("path");
const fs = require("fs-extra");

const projectPath = process.argv[2] || path.resolve(__dirname, "../examples/arco-design-pro-next");

fs.copySync(
  path.resolve(__dirname, "../arco-design-pro-next"),
  projectPath,
  {
    filter: (src) =>
      src.indexOf("node_modules") === -1 && src.indexOf(".next") === -1,
  }
);
