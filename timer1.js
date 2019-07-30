const timer = process.argv.slice(2).map(input => Number(input));

timer.forEach(t => {
  setTimeout(() => {
    process.stdout.write("Ring!" + "\n");
  }, t * 1000);
});
