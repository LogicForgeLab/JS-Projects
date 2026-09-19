const worker = new Worker("./worker.js");

const arr = [12, 45, 7, 89, 23, 56, 91, 3, 67];

worker.postMessage(arr);

worker.onmessage = (event) => {
    console.log(event.data);
}   
