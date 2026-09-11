# Generator Functions — JavaScript

This repository contains examples and exercises for understanding **Generator Functions** in JavaScript.

## What is a Generator?

A generator is a special function that can pause its execution and resume it later.

A generator function is declared using `function*` and uses the `yield` keyword to return values one at a time.

```javascript
function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = numbers();

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }
```

## Basic Concepts

### `function*`

Creates a generator function:

```javascript
function* generator() {
    yield 1;
}
```

### `yield`

Returns a value and pauses the generator:

```javascript
function* example() {
    yield 10;
    yield 20;
}
```

### `.next()`

Resumes the generator and returns an object:

```javascript
{
    value: 10,
    done: false
}
```

* `value` — the yielded value
* `done` — indicates whether the generator has finished

---

# Exercises

## 1. Basic Sequence Generator

Create a generator function `numberGenerator(start, end)` that yields all integers sequentially from `start` to `end` inclusive.

Example:

```javascript
function* numberGenerator(start, end) {
    for (let current = start; current <= end; current++) {
        yield current;
    }
}

const generator = numberGenerator(1, 5);

console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
console.log(generator.next().value); // 4
console.log(generator.next().value); // 5
```

---

## 2. Infinite ID Generator

Create an infinite `idGenerator()` that yields unique string identifiers in the format:

```text
id_1
id_2
id_3
...
```

Example:

```javascript
function* idGenerator() {
    let id = 1;

    while (true) {
        yield `id_${id}`;
        id++;
    }
}

const generator = idGenerator();

console.log(generator.next().value); // id_1
console.log(generator.next().value); // id_2
console.log(generator.next().value); // id_3
```

Because the generator uses `while (true)`, it can continue producing IDs indefinitely.

---

## 3. Fibonacci Number Generator

Implement an infinite `fibonacci()` generator that yields Fibonacci numbers one at a time.

Example:

```javascript
function* fibonacci() {
    let a = 0;
    let b = 1;

    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const generator = fibonacci();

console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
console.log(generator.next().value); // 5
console.log(generator.next().value); // 8
```

Sequence:

```text
0 → 1 → 1 → 2 → 3 → 5 → 8 → 13 → ...
```

---

## 4. Pagination via Generator

Write a generator function `paginate(array, pageSize)` that takes an array and a page size, then yields chunks of data on each `.next()` call.

Example:

```javascript
function* paginate(array, pageSize) {
    for (let i = 0; i < array.length; i += pageSize) {
        yield array.slice(i, i + pageSize);
    }
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const pages = paginate(data, 3);

console.log(pages.next().value); // [1, 2, 3]
console.log(pages.next().value); // [4, 5, 6]
console.log(pages.next().value); // [7, 8, 9]
```

The array is divided into pages:

```text
Page 1 → [1, 2, 3]
Page 2 → [4, 5, 6]
Page 3 → [7, 8, 9]
```

---

## 5. Store Generator

Create a generator that accepts a start and end value and yields each number multiplied by `2`.

Example:

```javascript
function* storeGenerator(start, end) {
    if (start > end) {
        throw new Error("Start must be less than or equal to end");
    }

    for (let current = start; current <= end; current++) {
        yield current * 2;
    }
}

const generator = storeGenerator(1, 5);

console.log(generator.next().value); // 2
console.log(generator.next().value); // 4
console.log(generator.next().value); // 6
console.log(generator.next().value); // 8
console.log(generator.next().value); // 10
```

## Using `for...of`

Generators can also be iterated using `for...of`:

```javascript
const generator = storeGenerator(1, 5);

for (const value of generator) {
    console.log(value);
}
```

Output:

```text
2
4
6
8
10
```

`for...of` automatically calls `.next()` until the generator is finished.

---

# Important Generator Methods

## `.next()`

Moves the generator forward:

```javascript
generator.next();
```

## `.return()`

Stops the generator:

```javascript
generator.return();
```

## `.throw()`

Throws an error inside the generator:

```javascript
generator.throw(new Error("Something went wrong"));
```

---

# Key Takeaways

* `function*` creates a generator function.
* `yield` pauses execution and returns a value.
* `.next()` resumes execution.
* Generators return `{ value, done }`.
* Generators are useful for lazy evaluation.
* Infinite sequences can be created safely with generators.
* `for...of` can automatically iterate over generator values.
* Generators are useful for pagination, IDs, sequences, and data processing.

## Syntax

```javascript
function* generatorName() {
    yield value;
}
```

Then:

```javascript
const generator = generatorName();

generator.next();
```
