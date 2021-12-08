const { spawnSync } = require('child_process');

const FRAMEWORK_LIST = ['cra', 'nuxt', 'vite'];

module.exports = function ({ framework, projectPath }) {
  if (FRAMEWORK_LIST.indexOf(framework) > -1) {
    const { stderr, error } = spawnSync('npm', ['run', `gen:${framework}`, '--', projectPath]);

    if (error) {
      throw error;
    }

    if (stderr && stderr.toString()) {
      throw new Error(`Failed to copy project content.\n${stderr.toString()}`)
    }
  }
}
