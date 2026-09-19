const worker = new Worker("./worker.js");

worker.postMessage("Hello from main.js");

worker.onmessage = (event) => {
    console.log("FROM WORKER:", event.data);
};