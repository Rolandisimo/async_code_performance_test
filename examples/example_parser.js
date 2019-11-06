class Parser {
  static parse() {
    return new Promise((resolve) => {
      new Array(1000000).fill(0);
      resolve();
    });
  }
}

module.exports = Parser;
