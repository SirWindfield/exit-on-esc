const readline = require('readline');

// make sure that key events get forwarded.
readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

module.exports = () => {
  process.stdin.on('keypress', (str, key) => {
    if (key && key.name === 'escape') {
      process.exit();
    }
  });
};
