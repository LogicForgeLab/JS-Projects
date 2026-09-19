self.onmessage = (event) => {
    console.log("WORKER RECEIVED:", event.data);

    self.postMessage("Hello from worker");
};