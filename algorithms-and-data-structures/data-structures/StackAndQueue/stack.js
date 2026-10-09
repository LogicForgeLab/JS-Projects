class Stack {
  #capacity;
    #size;
    #arr;

    constructor(initialCapacity = 16) {
        if (initialCapacity <= 0 || !Number.isInteger(initialCapacity)) {
            throw new Error("Capacity must be a positive integer");
        };

        this.#capacity = initialCapacity;
        this.#size = 0;
        this.#arr = new Array(initialCapacity);
    };

    isEmpty() {
        return this.#size === 0;
    };

    get size() {
        return this.#size;
    };

    push(elem) {
        if (this.#size === this.#capacity) {
            this.#capacity *= 2;
            const newArr = new Array(this.#capacity);

            for (let i = 0; i < this.#size; ++i) {
                newArr[i] = this.#arr[i];
            };

            this.#arr = newArr;
        };

        this.#arr[this.#size] = elem;
        this.#size++;
    };

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is Empty");
        };

        this.#size--;
        const elem = this.#arr[this.#size];
        this.#arr[this.#size] = undefined;

        return elem;
    };

    clear() {
        this.#arr = new Array(this.#capacity);
        this.#size = 0;
    };

    *[Symbol.iterator]() {
        for (let i = this.#size - 1; i >= 0; i--) {
            yield this.#arr[i];
        };
    };
};


