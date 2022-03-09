const { spawnSync } = require('child_process');

const FRAMEWORK_LIST = ['cra', 'next', 'vite'];

const isWindows = process.platform === 'win32';
const cmd = isWindows ? 'npm.cmd' : 'npm';

module.exports = function ({ framework, projectPath, simple }) {
  if (FRAMEWORK_LIST.indexOf(framework) > -1) {
    const command = ['run', `gen:${framework}`, '--'];
    if (projectPath) {
      command.push(`--projectPath=${projectPath}`);
    }
    if (simple) {
      command.push(`--simple`);
    }

    const { stderr, error } = spawnSync(cmd, command);

    if (error) {
      throw error;
    }

    if (stderr && stderr.toString()) {
      throw new Error(`Failed to copy project content.\n${stderr.toString()}`);
    }
  }
};
