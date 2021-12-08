const logInfo = (messages) => {
  messages.forEach((m) => {
    console.log(`\x1B[32m${m}\x1B[0m`);
  });
};

module.exports = ({ projectName }) => {
  logInfo([
    '******************************************************************************',
    '  Read README.md for help information. Execute following command to start',
    `    $ cd ${projectName}`,
    '    $ yarn dev',
    '******************************************************************************',
  ]);
}
