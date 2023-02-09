const { spawnSync } = require('child_process');

const isWindows = process.platform === 'win32';
const cmd = isWindows ? 'pnpm.cmd' : 'pnpm';

const logInfo = (messages) => {
  messages.forEach((m) => {
    console.log(`\x1B[32m${m}\x1B[0m`);
  });
};

module.exports = ({ projectName }) => {
  const { error } = spawnSync(cmd, ['add', 'arco-design-pro-vue']);

  if (error) {
    throw error;
  }

  logInfo([
    '******************************************************************************',
    '  Read README.md for help information. Execute following command to start',
    `    $ cd ${projectName}`,
    '    $ pnpm run dev',
    '******************************************************************************',
  ]);
};
