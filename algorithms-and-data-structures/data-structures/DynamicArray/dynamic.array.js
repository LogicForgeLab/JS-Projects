class DynamicArray {
  #arr;
  #size;
  #capacity;
  #GROWTH = 2;

  constructor(cap) {
    if (!Number.isInteger(cap) || cap <= 0) {
      throw new Error("Capacity must be a positive integer");
    }

    this.#arr = new Uint32Array(cap);
    this.#capacity = cap;
    this.#size = 0;
  }

  #resize() {
    const newCap = this.#capacity * this.#GROWTH;
    const tmp = new Uint32Array(newCap);

    for (let i = 0; i < this.#size; ++i) {
      tmp[i] = this.#arr[i];
    }

    this.#capacity = newCap;
    this.#arr = tmp;
  }

  push_back(elem) {
    if (!Number.isInteger(elem)) {
      throw new Error("Element must be an integer");
    }

    if (this.#size === this.#capacity) {
      this.#resize();
    }

    this.#arr[this.#size++] = elem;
  }

  pop_back() {
    if (this.#size === 0) {
      throw new Error("Cannot pop from an empty array");
    }

    return this.#arr[--this.#size];
  }

  at(index) {
    if (!Number.isInteger(index)) {
      throw new Error("Index must be an integer");
    }

    if (index < 0 || index >= this.#size) {
      throw new Error("Index is out of bounds");
    }

    return this.#arr[index];
  }

  set(index, value) {
    if (!Number.isInteger(index)) {
      throw new Error("Index must be an integer");
    }

    if (index < 0 || index >= this.#size) {
      throw new Error("Index is out of bounds");
    }

    if (!Number.isInteger(value)) {
      throw new Error("Value must be an integer");
    }

    this.#arr[index] = value;

    return value;
  }

  front() {
    if (this.#size === 0) {
      throw new Error("Cannot access front element of an empty array");
    }

    return this.#arr[0];
  }

  back() {
    if (this.#size === 0) {
      throw new Error("Cannot access back element of an empty array");
    }

    return this.#arr[this.#size - 1];
  }

  erase(pos) {
    if (!Number.isInteger(pos)) {
      throw new Error("Position must be an integer");
    }

    if (pos < 0 || pos >= this.#size) {
      throw new Error("Position is out of bounds");
    }

    for (let i = pos; i < this.#size - 1; ++i) {
      this.#arr[i] = this.#arr[i + 1];
    }

    --this.#size;
  }

  insert(pos, value) {
    if (!Number.isInteger(pos)) {
      throw new Error("Position must be an integer");
    }

    if (pos < 0 || pos > this.#size) {
      throw new Error("Position is out of bounds");
    }

    if (!Number.isInteger(value)) {
      throw new Error("Value must be an integer");
    }

    if (this.#size === this.#capacity) {
      this.#resize();
    }

    for (let i = this.#size; i > pos; --i) {
      this.#arr[i] = this.#arr[i - 1];
    }

    this.#arr[pos] = value;
    ++this.#size;

    return pos;
  }

  swap(i, j) {
    if (!Number.isInteger(i) || !Number.isInteger(j)) {
      throw new Error("Indices must be integers");
    }

    if (i < 0 || i >= this.#size) {
      throw new Error("First index is out of bounds");
    }

    if (j < 0 || j >= this.#size) {
      throw new Error("Second index is out of bounds");
    }

    [this.#arr[i], this.#arr[j]] = [this.#arr[j], this.#arr[i]];
  }

  *values() {
    for (let i = 0; i < this.#size; ++i) {
      yield this.#arr[i];
    }
  }

  *keys() {
    for (let i = 0; i < this.#size; ++i) {
      yield i;
    }
  }

  forEach(fn) {
    if (typeof fn !== "function") {
      throw new Error("Argument must be a function");
    }

    for (let i = 0; i < this.#size; ++i) {
      fn(this.#arr[i], i);
    }
  }

  map(fn) {
    if (typeof fn !== "function") {
      throw new Error("Argument must be a function");
    }

    const result = new DynamicArray(this.#capacity);

    for (let i = 0; i < this.#size; ++i) {
      result.push_back(fn(this.#arr[i], i));
    }

    return result;
  }

  filter(fn) {
    if (typeof fn !== "function") {
      throw new Error("Argument must be a function");
    }

    const result = new DynamicArray(this.#capacity);

    for (let i = 0; i < this.#size; ++i) {
      if (fn(this.#arr[i], i)) {
        result.push_back(this.#arr[i]);
      }
    }

    return result;
  }

  reduce(fn, init) {
    if (typeof fn !== "function") {
      throw new Error("Argument must be a function");
    }

    if (!Number.isInteger(init)) {
      throw new Error("Initial value must be an integer");
    }

    let result = init;

    for (let i = 0; i < this.#size; ++i) {
      result = fn(result, this.#arr[i], i);
    }

    return result;
  }

  some(fn) {
    if (typeof fn !== "function") {
      throw new Error("Argument must be a function");
    }

    for (let i = 0; i < this.#size; ++i) {
      if (fn(this.#arr[i], i) === true) {
        return true;
      }
    }

    return false;
  }

  find(fn) {
    if (typeof fn !== "function") {
      throw new Error("Argument must be a function");
    }

    for (let i = 0; i < this.#size; ++i) {
      if (fn(this.#arr[i], i) === true) {
        return this.#arr[i];
      }
    }

    return undefined;
  }

  findIndex(fn) {
    if (typeof fn !== "function") {
      throw new Error("Argument must be a function");
    }

    for (let i = 0; i < this.#size; ++i) {
      if (fn(this.#arr[i], i) === true) {
        return i;
      }
    }

    return -1;
  }

  includes(value) {
    for (let i = 0; i < this.#size; ++i) {
      if (this.#arr[i] === value) {
        return true;
      }
    }

    return false;
  }

  [Symbol.iterator]() {
    let i = 0;

    return {
      next: () => {
        if (i < this.#size) {
          return {
            value: this.#arr[i++],
            done: false,
          };
        }

        return {
          value: undefined,
          done: true,
        };
      },
    };
  }
};

// ==============================
// DynamicArray Tests
// ==============================

const assert = (condition, message) => {
  if (!condition) {
    throw new Error(`❌ FAIL: ${message}`);
  }

  console.log(`✅ PASS: ${message}`);
};

const assertThrows = (fn, message) => {
  try {
    fn();
    throw new Error(`❌ FAIL: ${message}`);
  } catch (error) {
    if (error.message.startsWith("❌ FAIL")) {
      throw error;
    }

    console.log(`✅ PASS: ${message}`);
  }
};

const assertArrayEqual = (actual, expected, message) => {
  const a = [...actual];
  const b = [...expected];

  const equal =
    a.length === b.length &&
    a.every((value, index) => value === b[index]);

  assert(equal, message);
};


// ==============================
// Constructor
// ==============================

assertThrows(
  () => new DynamicArray(0),
  "Constructor rejects capacity 0"
);

assertThrows(
  () => new DynamicArray(-1),
  "Constructor rejects negative capacity"
);

assertThrows(
  () => new DynamicArray(1.5),
  "Constructor rejects non-integer capacity"
);

const arr = new DynamicArray(2);


// ==============================
// push_back()
// ==============================

arr.push_back(10);
arr.push_back(20);

assert(
  arr.at(0) === 10,
  "push_back adds first element"
);

assert(
  arr.at(1) === 20,
  "push_back adds second element"
);


// ==============================
// resize()
// ==============================

// capacity = 2, adding third element must resize
arr.push_back(30);

assert(
  arr.at(2) === 30,
  "push_back works after resize"
);

assert(
  arr.at(0) === 10 &&
  arr.at(1) === 20 &&
  arr.at(2) === 30,
  "resize preserves existing elements"
);

assertThrows(
  () => arr.push_back(1.5),
  "push_back rejects non-integer"
);


// ==============================
// at()
// ==============================

assert(
  arr.at(0) === 10,
  "at(0) returns first element"
);

assert(
  arr.at(2) === 30,
  "at(2) returns last element"
);

assertThrows(
  () => arr.at(-1),
  "at rejects negative index"
);

assertThrows(
  () => arr.at(3),
  "at rejects index equal to size"
);

assertThrows(
  () => arr.at(1.5),
  "at rejects non-integer index"
);


// ==============================
// set()
// ==============================

arr.set(1, 200);

assert(
  arr.at(1) === 200,
  "set changes element"
);

assertThrows(
  () => arr.set(-1, 10),
  "set rejects negative index"
);

assertThrows(
  () => arr.set(10, 10),
  "set rejects out-of-bounds index"
);

assertThrows(
  () => arr.set(0, 1.5),
  "set rejects non-integer value"
);


// ==============================
// front()
// ==============================

assert(
  arr.front() === 10,
  "front returns first element"
);


// ==============================
// back()
// ==============================

assert(
  arr.back() === 30,
  "back returns last element"
);


// ==============================
// swap()
// ==============================

arr.swap(0, 2);

assert(
  arr.at(0) === 30 && arr.at(2) === 10,
  "swap exchanges two elements"
);

assertThrows(
  () => arr.swap(-1, 1),
  "swap rejects negative index"
);

assertThrows(
  () => arr.swap(0, 100),
  "swap rejects out-of-bounds index"
);

assertThrows(
  () => arr.swap(1.5, 2),
  "swap rejects non-integer index"
);


// ==============================
// insert()
// ==============================

const insertTest = new DynamicArray(2);

insertTest.push_back(10);
insertTest.push_back(30);

insertTest.insert(1, 20);

assertArrayEqual(
  insertTest.values(),
  [10, 20, 30],
  "insert adds element in the middle"
);

insertTest.insert(0, 5);

assertArrayEqual(
  insertTest.values(),
  [5, 10, 20, 30],
  "insert works at beginning"
);

insertTest.insert(insertTestSize(insertTest), 40);

function insertTestSize(array) {
  let count = 0;

  for (const value of array) {
    count++;
  }

  return count;
}

assertArrayEqual(
  insertTest.values(),
  [5, 10, 20, 30, 40],
  "insert works at the end"
);

assertThrows(
  () => insertTest.insert(-1, 10),
  "insert rejects negative position"
);

assertThrows(
  () => insertTest.insert(100, 10),
  "insert rejects out-of-bounds position"
);

assertThrows(
  () => insertTest.insert(1, 1.5),
  "insert rejects non-integer value"
);


// ==============================
// erase()
// ==============================

const eraseTest = new DynamicArray(5);

eraseTest.push_back(10);
eraseTest.push_back(20);
eraseTest.push_back(30);
eraseTest.push_back(40);

eraseTest.erase(1);

assertArrayEqual(
  eraseTest.values(),
  [10, 30, 40],
  "erase removes middle element"
);

eraseTest.erase(0);

assertArrayEqual(
  eraseTest.values(),
  [30, 40],
  "erase removes first element"
);

eraseTest.erase(1);

assertArrayEqual(
  eraseTest.values(),
  [30],
  "erase removes last element"
);

assertThrows(
  () => eraseTest.erase(-1),
  "erase rejects negative position"
);

assertThrows(
  () => eraseTest.erase(100),
  "erase rejects out-of-bounds position"
);


// ==============================
// pop_back()
// ==============================

const popTest = new DynamicArray(2);

popTest.push_back(10);
popTest.push_back(20);

assert(
  popTest.pop_back() === 20,
  "pop_back returns last element"
);

assert(
  popTest.pop_back() === 10,
  "pop_back returns remaining element"
);

assertThrows(
  () => popTest.pop_back(),
  "pop_back rejects empty array"
);


// ==============================
// values()
// ==============================

const valuesTest = new DynamicArray(3);

valuesTest.push_back(10);
valuesTest.push_back(20);
valuesTest.push_back(30);

assertArrayEqual(
  valuesTest.values(),
  [10, 20, 30],
  "values returns all values"
);


// ==============================
// keys()
// ==============================

assertArrayEqual(
  valuesTest.keys(),
  [0, 1, 2],
  "keys returns all indexes"
);


// ==============================
// forEach()
// ==============================

let forEachResult = [];

valuesTest.forEach((value, index) => {
  forEachResult.push(value + index);
});

assertArrayEqual(
  forEachResult,
  [10, 21, 32],
  "forEach passes value and index"
);

assertThrows(
  () => valuesTest.forEach(123),
  "forEach rejects non-function"
);


// ==============================
// map()
// ==============================

const mapResult = valuesTest.map(
  (value, index) => value + index
);

assertArrayEqual(
  mapResult.values(),
  [10, 21, 32],
  "map transforms values"
);

assertArrayEqual(
  valuesTest.values(),
  [10, 20, 30],
  "map does not modify original array"
);

assertThrows(
  () => valuesTest.map("test"),
  "map rejects non-function"
);


// ==============================
// filter()
// ==============================

const filterResult = valuesTest.filter(
  value => value >= 20
);

assertArrayEqual(
  filterResult.values(),
  [20, 30],
  "filter returns matching values"
);

assertArrayEqual(
  valuesTest.values(),
  [10, 20, 30],
  "filter does not modify original array"
);

assertThrows(
  () => valuesTest.filter(123),
  "filter rejects non-function"
);


// ==============================
// reduce()
// ==============================

const sum = valuesTest.reduce(
  (acc, value) => acc + value,
  0
);

assert(
  sum === 60,
  "reduce calculates sum"
);

const multiplied = valuesTest.reduce(
  (acc, value) => acc * value,
  1
);

assert(
  multiplied === 6000,
  "reduce calculates multiplication"
);

assertThrows(
  () => valuesTest.reduce(123, 0),
  "reduce rejects non-function"
);

assertThrows(
  () => valuesTest.reduce(
    (acc, value) => acc + value,
    "0"
  ),
  "reduce rejects non-integer init"
);


// ==============================
// some()
// ==============================

assert(
  valuesTest.some(value => value > 25) === true,
  "some returns true when match exists"
);

assert(
  valuesTest.some(value => value > 100) === false,
  "some returns false when no match exists"
);

assertThrows(
  () => valuesTest.some(123),
  "some rejects non-function"
);


// ==============================
// find()
// ==============================

assert(
  valuesTest.find(value => value > 15) === 20,
  "find returns first matching value"
);

assert(
  valuesTest.find(value => value > 100) === undefined,
  "find returns undefined when no match exists"
);

assertThrows(
  () => valuesTest.find(123),
  "find rejects non-function"
);


// ==============================
// findIndex()
// ==============================

assert(
  valuesTest.findIndex(value => value > 15) === 1,
  "findIndex returns first matching index"
);

assert(
  valuesTest.findIndex(value => value > 100) === -1,
  "findIndex returns -1 when no match exists"
);

assertThrows(
  () => valuesTest.findIndex(123),
  "findIndex rejects non-function"
);


// ==============================
// includes()
// ==============================

assert(
  valuesTest.includes(20) === true,
  "includes finds existing value"
);

assert(
  valuesTest.includes(999) === false,
  "includes returns false for missing value"
);


// ==============================
// Symbol.iterator
// ==============================

const iteratorResult = [];

for (const value of valuesTest) {
  iteratorResult.push(value);
}

assertArrayEqual(
  iteratorResult,
  [10, 20, 30],
  "Symbol.iterator works with for...of"
);

assertArrayEqual(
  [...valuesTest],
  [10, 20, 30],
  "Symbol.iterator works with spread"
);


// ==============================
// EMPTY ARRAY TESTS
// ==============================

const empty = new DynamicArray(2);

assert(
  empty.some(() => true) === false,
  "some works with empty array"
);

assert(
  empty.find(() => true) === undefined,
  "find works with empty array"
);

assert(
  empty.findIndex(() => true) === -1,
  "findIndex works with empty array"
);

assert(
  empty.includes(10) === false,
  "includes works with empty array"
);

assertArrayEqual(
  empty.values(),
  [],
  "values works with empty array"
);

assertArrayEqual(
  empty.keys(),
  [],
  "keys works with empty array"
);

assertArrayEqual(
  empty.map(value => value * 2),
  [],
  "map works with empty array"
);

assertArrayEqual(
  empty.filter(value => value > 0),
  [],
  "filter works with empty array"
);


// ==============================
// FINAL
// ==============================

console.log("================================");
console.log("🎉 ALL TESTS PASSED");
console.log("================================");
