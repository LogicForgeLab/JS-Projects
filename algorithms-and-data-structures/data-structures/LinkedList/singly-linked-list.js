class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class SList {
  constructor(iterables = []) {
    this.head = null;
    this.size = 0;

    for (const value of iterables) {
      this.push_back(value);
    }
  }

  static fromArray(arr) {
    const list = new SList();

    for (let i = 0; i < arr.length; ++i) {
      list.push_back(arr[i]);
    }

    return list;
  }

  get size() {
    return this.size;
  }

  clear() {
    this.head = null;
    this.size = 0;
  }

  push_back(elem) {
    const node = new Node(elem);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  push_front(elem) {
    const node = new Node(elem, this.head);

    this.head = node;
    this.size++;
  }

  pop_back() {
    if (!this.head) {
      throw new Error("List is empty");
    }

    if (!this.head.next) {
      this.head = null;
    } else {
      let current = this.head;

      while (current.next.next !== null) {
        current = current.next;
      }

      current.next = null;
    }

    this.size--;
  }

  pop_front() {
    if (!this.head) {
      throw new Error("List is empty");
    }

    this.head = this.head.next;
    this.size--;
  }

  toArray() {
    const arr = [];
    let current = this.head;

    while (current !== null) {
      arr.push(current.data);
      current = current.next;
    }

    return arr;
  }

  front() {
    if (!this.head) {
      throw new Error("List is empty");
    }

    return this.head.data;
  }

  isEmpty() {
    return this.head === null;
  }

  at(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of range");
    }

    let current = this.head;

    for (let i = 0; i < index; ++i) {
      current = current.next;
    }

    return current.data;
  }

  insert(index, value) {
    if (index < 0 || index > this.size) {
      throw new Error("Index out of range");
    }

    if (index === 0) {
      this.push_front(value);
      return;
    }

    let current = this.head;

    for (let i = 0; i < index - 1; ++i) {
      current = current.next;
    }

    const node = new Node(value, current.next);
    current.next = node;

    this.size++;
  }

  erase(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of range");
    }

    if (index === 0) {
      this.pop_front();
      return;
    }

    let current = this.head;

    for (let i = 0; i < index - 1; ++i) {
      current = current.next;
    }

    current.next = current.next.next;
    this.size--;
  }

  reverse() {
    let prev = null;
    let current = this.head;

    while (current !== null) {
      const next = current.next;

      current.next = prev;

      prev = current;
      current = next;
    }

    this.head = prev;
  }

  merge(list) {
    for (let i = 0; i < list.size; ++i) {
      this.push_back(list.at(i));
    }
  }

  remove(value) {
    while (this.head && this.head.data === value) {
      this.head = this.head.next;
      this.size--;
    }

    let current = this.head;

    while (current && current.next) {
      if (current.next.data === value) {
        current.next = current.next.next;
        this.size--;
      } else {
        current = current.next;
      }
    }
  }

  sort(cmp) {
    cmp = typeof cmp === "function" ? cmp : (a, b) => a - b;

    function mergeSort(list) {
      if (!list || !list.next) {
        return list;
      }

      let slow = list;
      let fast = list.next;

      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
      }

      const mid = slow.next;
      slow.next = null;

      const left = mergeSort(list);
      const right = mergeSort(mid);

      return merge(left, right);
    }

    function merge(list1, list2) {
      const dummy = new Node(null);
      let current = dummy;

      while (list1 && list2) {
        if (cmp(list1.data, list2.data) <= 0) {
          current.next = list1;
          list1 = list1.next;
        } else {
          current.next = list2;
          list2 = list2.next;
        }

        current = current.next;
      }

      current.next = list1 || list2;

      return dummy.next;
    }

    this.head = mergeSort(this.head);
  }

  [Symbol.iterator]() {
    let current = this.head;

    return {
      next() {
        if (current === null) {
          return {
            value: undefined,
            done: true,
          };
        }

        const value = current.data;
        current = current.next;

        return {
          value,
          done: false,
        };
      },
    };
  }
}

