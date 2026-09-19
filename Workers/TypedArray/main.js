console.log("main.js is working");

const numbers = new Uint8Array([10, 20, 30, 40, 50]);

console.log("Before:", numbers);

const worker = new Worker("./worker.js");

worker.postMessage(numbers);

worker.onmessage = (event) => {
    console.log("After:", event.data);
};