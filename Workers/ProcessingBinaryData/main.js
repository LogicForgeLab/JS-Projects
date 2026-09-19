const worker = new Worker("./worker.js");

const buffer = new ArrayBuffer(20);
const numbers = new Uint32Array(buffer);

numbers.set([10, 20, 30, 40, 50]);

worker.postMessage(numbers);

worker.onmessage = (event) => {
    console.log(event.data);
}
