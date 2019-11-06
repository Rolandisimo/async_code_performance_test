Simple, independent async code performance tester 🕵️

## Install
`npm i --save-dev simple_async_perf_tester`<br/>
or<br/>
`yarn --dev simple_async_perf_tester`

## Usage
```javascript
const perfTest = require("simple_async_perf_tester"); // or ES6 import

perfTest({
  numberOfRuns: 5,
  scriptName: "script.js",
});
perfTest({ scriptName: "anotherScript.js" });

// Example output:
/**
 * Running Performance Testing 🕵️‍♂️
 * - Number of runs: 200
 * - Test script: example.js
 *
 * RESULT:
 * - Average parsing time is 5.98ms
 */
```

## Options
Options to pass to the performace execution function
```javascript
const options = {
  numberOfRuns: 100, // OPTIONAL. A positive integer. Defaults to 50
  scriptName: "parse.js", // Path to the testing script that outputs delta execution time. See `examples` folder
}
```

## Example test scripts
Check [examples](https://github.com/Rolandisimo/async_code_performance_test/tree/master/examples) folder

## Reason
I decided to save this example repo because of unexpected issues I ran into while testing async code execution using `Promise.all`. What I observed is that by increasing the number of runs, the average execution time increased linearly.

By moving each execution to its own process, the test is unbiased and independent of current process resources being taken by past executions. Unfortunately, the approach here makes the execution of the performance test longer.
