const Parser = require("./example_parser");

(async () => {
  const timeBefore = Date.now();
  await Parser.parse();
  const timeAfter = Date.now();
  console.log(timeAfter - timeBefore)
})()

