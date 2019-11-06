const getAverage = require("./getAverage");
const spawn = require("child_process").spawn;

function logStart(numberOfRuns, testScript) {
  console.log("\x1b[1m%s\x1b[0m","Running Performance Testing 🕵️‍♂️")
  console.log("\x1b[0m%s\x1b[33m", `- Number of runs:`, `${numberOfRuns}`)
  console.log("\x1b[0m%s\x1b[33m%s\x1b[0m", `- Test script: `, `${testScript}`)
}
function logEnd(time) {
  console.log("\x1b[1m", "\nRESULT:")
  console.log("\x1b[0m%s\x1b[33m","- Average parsing time is", `${time}ms`);
}

if (!process.env.TEST_SCRIPT) {
  console.error("You have to pass a TEST_SCRIPT env variable ❌")
  process.exit(1);
}

(async () => {
  const numberOfRuns = process.env.TEST_RUNS || 100;
  const arr = new Array(numberOfRuns).fill(0);

  logStart(numberOfRuns, process.env.TEST_SCRIPT);

  const times = [];
  for (let _ in arr) {
    const time = await new Promise((resolve, reject) => {
      const proc = spawn("node", [process.env.TEST_SCRIPT]);

      proc.stdout.on("data", (data) => {
        resolve(+data.toString().trim())
      })
      proc.stderr.on("data", (error) => {
        reject(error);
      })
    })

    times.push(time);
  }

  logEnd(getAverage(times));
})()