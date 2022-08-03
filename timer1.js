const argv = process.argv.slice(2);
const beepTime = argv.map(n => Number(n)).filter(n => !Number.isNaN(n) && n >= 0);

if (beepTime.length === 0) {
  return;
}

for (const time of beepTime) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
}
