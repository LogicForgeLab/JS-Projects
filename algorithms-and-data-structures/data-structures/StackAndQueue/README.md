# Stack and Queue

This project implements two fundamental data structures in JavaScript: **Stack** and **Queue**, using dynamically resizing arrays.

## 1. Stack

A **Stack** follows the **LIFO (Last In, First Out)** principle. This means the last element added is the first one removed.

### Usage Example

```javascript
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.size);  // 3
console.log(stack.top()); // 30

console.log(stack.pop()); // 30
console.log(stack.pop()); // 20

console.log(stack.isEmpty()); // false

stack.clear();

console.log(stack.isEmpty()); // true
```

### Stack Methods

| Method                | Description                                   | Time Complexity |
| --------------------- | --------------------------------------------- | --------------- |
| `push(elem)`          | Adds an element to the top of the stack.      | Amortized O(1)  |
| `pop()`               | Removes and returns the top element.          | O(1)            |
| `top()`               | Returns the top element without removing it.  | O(1)            |
| `size`                | Returns the number of elements.               | O(1)            |
| `isEmpty()`           | Checks whether the stack is empty.            | O(1)            |
| `clear()`             | Removes all elements from the stack.          | O(1)*           |
| `[Symbol.iterator]()` | Iterates through elements from top to bottom. | O(n)            |

*Assuming `clear()` resets the array by assigning a new array.

If the stack is empty, `pop()` and `top()` can throw an error, depending on the implementation.

## 2. Queue

A **Queue** follows the **FIFO (First In, First Out)** principle. This means the first element added is the first one removed.

This implementation uses a `front` index and a circular-array approach. Elements do not need to be shifted when `dequeue()` is called.

### Usage Example

```javascript
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.size);        // 3
console.log(queue.get_front()); // 10
console.log(queue.get_back());  // 30

console.log(queue.dequeue());   // 10

queue.print(); // [20, 30]

for (const elem of queue) {
    console.log(elem);
}

// 20
// 30
```

### Queue Methods

| Method                | Description                                    | Time Complexity |
| --------------------- | ---------------------------------------------- | --------------- |
| `enqueue(elem)`       | Adds an element to the end of the queue.       | Amortized O(1)  |
| `dequeue()`           | Removes and returns the front element.         | O(1)            |
| `get_front()`         | Returns the front element without removing it. | O(1)            |
| `get_back()`          | Returns the last element without removing it.  | O(1)            |
| `size`                | Returns the number of elements.                | O(1)            |
| `isEmpty()`           | Checks whether the queue is empty.             | O(1)            |
| `print()`             | Prints the queue elements in order.            | O(n)            |
| `[Symbol.iterator]()` | Iterates through elements from front to back.  | O(n)            |

If the queue is empty, `dequeue()` can throw an error, while `get_front()` and `get_back()` can return `undefined`.

## 3. Stack vs. Queue

| Feature           | Stack                     | Queue                      |
| ----------------- | ------------------------- | -------------------------- |
| Principle         | LIFO                      | FIFO                       |
| Add an element    | `push()`                  | `enqueue()`                |
| Remove an element | `pop()`                   | `dequeue()`                |
| Access an element | `top()`                   | `get_front()`              |
| Processing order  | Last added, first removed | First added, first removed |

## 4. Time Complexity

* **O(1)** — Constant time; the operation does not depend on the number of elements.
* **O(n)** — Linear time; the operation's running time grows with the number of elements.
* **Amortized O(1)** — Most operations take constant time, but resizing the underlying array may occasionally take O(n).

## 5. Requirements

The project requires a JavaScript environment that supports:

* Classes
* Private class fields (`#field`)
* Generator functions (`function*`)
* Iterators (`Symbol.iterator`)
