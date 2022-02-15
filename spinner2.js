// Spinner - a low-fidelity loading spinner

const animation = ['\r|', '\r/', '\r-', '\r\\'];
let delay = 100;

for (const symb of animation) {
  setTimeout(() => {
    process.stdout.write(`${symb}   `);
  }, delay);
  delay += 200;
}
