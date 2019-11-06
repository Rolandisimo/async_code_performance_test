const Parser = require("./example_parser");

const timeBefore = Date.now();
Parser.parse().then(() => {
  const timeAfter = Date.now();
  console.log(timeAfter - timeBefore)
}).catch((error) => console.error(error))
