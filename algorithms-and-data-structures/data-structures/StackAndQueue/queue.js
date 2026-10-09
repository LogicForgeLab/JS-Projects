class Queue {
  #capacity;
  #size;
  #arr;
  #front;

  constructor(capacity = 8) {
    if (capacity <= 0 || !Number.isInteger(capacity)) {
      throw new Error("Capacity must be a positive integer");
    }

    this.#capacity = capacity;
    this.#size = 0;
    this.#front = 0;
    this.#arr = new Array(capacity);
  }

  enqueue(elem) {
    if (this.#size === this.#capacity) {
      const newCapacity = this.#capacity * 2;
      const newArr = new Array(newCapacity);

      for (let i = 0; i < this.#size; i++) {
        newArr[i] = this.#arr[(this.#front + i) % this.#capacity];
      }

      this.#arr = newArr;
      this.#capacity = newCapacity;
      this.#front = 0;
    }

    const index = (this.#front + this.#size) % this.#capacity;

    this.#arr[index] = elem;
    this.#size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is Empty");
    }

    const elem = this.#arr[this.#front];

    this.#arr[this.#front] = undefined;
    this.#front = (this.#front + 1) % this.#capacity;
    this.#size--;

    if (this.#size === 0) {
      this.#front = 0;
    }

    return elem;
  }

  get size() {
    return this.#size;
  }

  get_front() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.#arr[this.#front];
  }

  get_back() {
    if (this.isEmpty()) {
      return undefined;
    }

    const index = (this.#front + this.#size - 1) % this.#capacity;

    return this.#arr[index];
  }

  print() {
    const result = [];

    for (let i = 0; i < this.#size; i++) {
      const index = (this.#front + i) % this.#capacity;
      result.push(this.#arr[index]);
    }

    console.log(result);
  }

  isEmpty() {
    return this.#size === 0;
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.#size; i++) {
      const index = (this.#front + i) % this.#capacity;
      yield this.#arr[index];
    }
  }
}
