self.onmessage = (event) => {
    const numbers = event.data;

    for (let i = 0; i < numbers.length; ++i) {
        numbers[i] *= 2;
    }

    self.postMessage(numbers);
}