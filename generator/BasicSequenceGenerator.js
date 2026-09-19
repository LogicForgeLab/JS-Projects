function* numberGenerator(next, end) {
    for (let i = 0; i <= end; ++i) {
        yield i;
    }
}

const numbers = numberGenerator(1, 5);

console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());