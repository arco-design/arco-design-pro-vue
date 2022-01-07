const { spawnSync } = require('child_process');

const FRAMEWORK_LIST = ['cra', 'nuxt', 'vite'];

const isWindows = process.platform === 'win32';
const cmd = isWindows ? 'npm.cmd' : 'npm';

module.exports = function ({ framework, projectPath }) {
  if (FRAMEWORK_LIST.indexOf(framework) > -1) {
    const { stderr, error } = spawnSync(cmd, [
      'run',
      `gen:${framework}`,
      '--',
      projectPath,
    ]);

    if (error) {
      throw error;
    }

    if (stderr && stderr.toString()) {
      throw new Error(`Failed to copy project content.\n${stderr.toString()}`);
    }
  }
};
