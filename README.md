# Unhandled Exception in Asynchronous Node.js Operation

This repository demonstrates a common error in Node.js: unhandled exceptions within asynchronous operations.  Specifically, it showcases a scenario where an error within a Promise's `reject` handler is not properly caught, leading to the application crashing without informative error messages. The solution improves error handling, ensuring graceful termination even in case of failures.

## Problem

The `bug.js` file contains an asynchronous operation using `fs.readFile` wrapped in a Promise. While the `catch` block attempts to handle errors, a silent failure might occur if an exception is thrown within the `catch` block itself. This will leave the program terminating without proper logging or cleanup.

## Solution

`bugSolution.js` addresses this by adding more robust error handling using a `try...catch` block within the `catch` block of the Promise.  This ensures that any errors during error handling are caught, logged, and the program exits gracefully with a descriptive error message.  This approach prevents silent failures and improves the application's resilience.
