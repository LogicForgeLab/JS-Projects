# Linked Lists

This project implements two fundamental data structures in JavaScript:

* **Singly Linked List**
* **Doubly Linked List**

Both data structures store elements in nodes and support dynamic insertion, deletion, and traversal.

## 1. Singly Linked List

A **Singly Linked List** is a linear data structure in which each node stores a value and a reference to the next node.

The list typically maintains a reference to its first node, called `head`.

### Node Structure

Each node contains:

* `data` — the value stored in the node.
* `next` — a reference to the next node, or `null` if it is the last node.

### Usage Example

```javascript
const list = new LinkedList();

list.pushFront(10);
list.pushBack(20);
list.pushBack(30);

console.log(list.front()); // 10
console.log(list.back());  // 30
console.log(list.size);    // 3
```

### Methods

| Method                | Description                                      | Time Complexity                                 |
| --------------------- | ------------------------------------------------ | ----------------------------------------------- |
| `pushFront(elem)`     | Adds an element to the beginning of the list.    | O(1)                                            |
| `pushBack(elem)`      | Adds an element to the end of the list.          | O(n), or O(1) if a tail reference is maintained |
| `popFront()`          | Removes the first element.                       | O(1)                                            |
| `popBack()`           | Removes the last element.                        | O(n)                                            |
| `front()`             | Returns the first element.                       | O(1)                                            |
| `back()`              | Returns the last element.                        | O(n), or O(1) if a tail reference is maintained |
| `at(index)`           | Returns the element at the specified index.      | O(n)                                            |
| `insert(index, elem)` | Inserts an element at the specified index.       | O(n)                                            |
| `erase(index)`        | Removes the element at the specified index.      | O(n)                                            |
| `remove(value)`       | Removes an element matching the specified value. | O(n)                                            |
| `reverse()`           | Reverses the list.                               | O(n)                                            |
| `isEmpty()`           | Checks whether the list is empty.                | O(1)                                            |
| `size`                | Returns the number of elements.                  | O(1), if size is tracked                        |
| `[Symbol.iterator]()` | Iterates through the list elements.              | O(n)                                            |

*Time complexities depend on the specific implementation.*

## 2. Doubly Linked List

A **Doubly Linked List** is a linear data structure in which each node stores a value and references to both the previous and next nodes.

The list typically maintains references to the first node (`head`) and the last node (`tail`).

### Node Structure

Each node contains:

* `data` — the value stored in the node.
* `prev` — a reference to the previous node.
* `next` — a reference to the next node.

### Usage Example

```javascript
const list = new DList();

list.pushFront(10);
list.pushBack(20);
list.pushBack(30);

console.log(list.front()); // 10
console.log(list.back());  // 30
console.log(list.size);    // 3

list.insert(1, 15);
list.erase(0);
list.reverse();
```

### Methods

| Method                | Description                                      | Time Complexity           |
| --------------------- | ------------------------------------------------ | ------------------------- |
| `pushFront(elem)`     | Adds an element to the beginning of the list.    | O(1)                      |
| `pushBack(elem)`      | Adds an element to the end of the list.          | O(1)                      |
| `popFront()`          | Removes the first element.                       | O(1)                      |
| `popBack()`           | Removes the last element.                        | O(1)                      |
| `front()`             | Returns the first element.                       | O(1)                      |
| `back()`              | Returns the last element.                        | O(1)                      |
| `at(index)`           | Returns the element at the specified index.      | O(n)                      |
| `insert(index, elem)` | Inserts an element at the specified index.       | O(n)                      |
| `erase(index)`        | Removes the element at the specified index.      | O(n)                      |
| `remove(value)`       | Removes an element matching the specified value. | O(n)                      |
| `reverse()`           | Reverses the list.                               | O(n)                      |
| `sort(cmp)`           | Sorts the list using a comparison function.      | Depends on implementation |
| `isEmpty()`           | Checks whether the list is empty.                | O(1)                      |
| `size`                | Returns the number of elements.                  | O(1), if size is tracked  |
| `[Symbol.iterator]()` | Iterates through the list elements.              | O(n)                      |

*Time complexities depend on the specific implementation.*

## 3. Singly Linked List vs. Doubly Linked List

| Feature                   | Singly Linked List        | Doubly Linked List             |
| ------------------------- | ------------------------- | ------------------------------ |
| Node references           | `next`                    | `prev` and `next`              |
| Traversal                 | Forward only              | Forward and backward           |
| Memory usage per node     | Lower                     | Higher                         |
| Removing the last node    | O(n)                      | O(1) when `tail` is maintained |
| Insertion at the end      | O(n), or O(1) with `tail` | O(1) with `tail`               |
| Implementation complexity | Simpler                   | More complex                   |

## 4. Advantages and Disadvantages

### Singly Linked List

**Advantages**

* Requires less memory per node.
* Efficient insertion and removal at the beginning.
* Supports dynamic growth and shrinking.

**Disadvantages**

* Cannot traverse backward.
* Accessing an element by index takes O(n) time.
* Removing the last node usually takes O(n) time.

### Doubly Linked List

**Advantages**

* Supports traversal in both directions.
* Efficient insertion and removal at both ends when `head` and `tail` are maintained.
* Provides convenient access to neighboring nodes.

**Disadvantages**

* Requires additional memory for the `prev` reference.
* Updating node references requires more care.
* Accessing an element by index still takes O(n) time.

## 5. Time Complexity

* **O(1) — Constant Time:** The operation takes approximately the same amount of time regardless of the number of elements.
* **O(n) — Linear Time:** The operation's running time grows proportionally to the number of elements.
* **O(n log n):** A common time complexity for efficient sorting algorithms. The actual complexity depends on the sorting implementation.

## 6. Requirements

The project requires a JavaScript environment that supports:

* Classes and objects.
* Object references.
* Iterators (`Symbol.iterator`), if iteration is implemented.

## 7. Notes

The examples use `LinkedList` as the class name for the singly linked list and `DList` for the doubly linked list.

Update the class names and method calls if your implementation uses different names.
