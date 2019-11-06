## Usage
Run `index.js` with 1-2 Node environment variables.
- TEST_SCRIPT - the script that registers start and end times, runs your code and outputs the delta time to stdout
- TEST_RUNS (optional) - number of times your TEST_SCRIPT will be run. The higher the number the slower the test, but more accurate the results. By default runs 100 times.

## Usage
- `TEST_SCRIPT=examples/example_then.js node index.js`
- `TEST_RUNS=5 TEST_SCRIPT=examples/example_await.js node index.js`

## Examples
- Check examples folder

## Reason
I decided to save this example repo because of unexpected issues I ran into while testing async code execution using `Promise.all`. What I observed is that by increasing the number of runs, the average execution time increased linearly.

By moving each execution to its own process, the test is unbiased and independent of current process resources being taken by past executions. Unfortunately, the approach here makes the execution of the performance test longer.
