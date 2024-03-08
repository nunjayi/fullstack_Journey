/**
 * @param {Function} fn - The function to be executed after the delay.
 * @param {Array} args - An array of arguments to pass to the function.
 * @param {number} t - The delay time in milliseconds.
 * @return {Function} - A cancel function that can be invoked to cancel the delayed execution.
 */
function cancellable(fn, args, t) {
    let timeout = setTimeout(() => {
        fn(...args);
    }, t);

    return function cancelFn() {
        clearTimeout(timeout);
    };
}

// Example usage:
const myFunction = (x) => x * 5;
const myArgs = [2];
const delayTime = 20;
const cancelTimeMs = 50;

const cancel = cancellable(myFunction, myArgs, delayTime);
const maxT = Math.max(delayTime, cancelTimeMs);
setTimeout(cancel, cancelTimeMs);

// After 65 milliseconds, fn(2) will be executed:
setTimeout(() => {
    console.log("Result:", myFunction(...myArgs)); // Output: Result: 10
}, 65);
