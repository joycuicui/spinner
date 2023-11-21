const symbol = [
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   \n",
];

for (let i = 0; i < symbol.length; i++) {
  setTimeout(() => {
    process.stdout.write(symbol[i]);
  }, i * 100 + (i + 1) * 100);
}
