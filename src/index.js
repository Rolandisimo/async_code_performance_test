import { getAverage } from "./getAverage";
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

export default async ({
  numberOfRuns = 50,
  scriptName,
}) => {
  if (!scriptName) {
    console.error("\x1b[33m", "You have to pass a value for scriptName in options")
    process.exit(1);
  }
  if (!numberOfRuns.match(/^\d+$/g)) {
    console.error("\x1b[33m", "Number of runs can only be a positive integer")
    process.exit(1);
  }

  try {
    const arr = new Array(numberOfRuns).fill(0);

    logStart(numberOfRuns, scriptName);

    const times = [];
    for (let _ in arr) {
      const time = await new Promise((resolve, reject) => {
        const proc = spawn("node", [scriptName]);

        proc.stdout.on("data", (data) => {
          const stringifiedResult = data.toString();
          if (stringifiedResult.match(/^\d+|\d+\.\d+$/g)) {
            resolve(+stringifiedResult)
          }
        })
        proc.stderr.on("data", (error) => {
          reject(error.toString());
        })
      })

      times.push(time);
    }

    logEnd(getAverage(times));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
