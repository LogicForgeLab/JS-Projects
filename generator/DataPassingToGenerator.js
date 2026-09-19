function* storeGenerator(next, end) {
    if (next > end) {
        throw new Error("Invalid Input"); 
    }

    for (let i = next; i <= end; ++i) {
        yield i * 2;
    }
}

const generator = storeGenerator(1, 5);

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

