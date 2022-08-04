process.stdin.setRawMode(true);
process.stdin.setEncoding('utf-8');

process.stdin.on('data', (key => {
  if (key === 'b') {
    process.stdout.write('\x07');
  }

  if (0 < Number(key) && Number(key) < 10) {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(key) * 1000);
  }

  if (key === '\x03') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
}));
