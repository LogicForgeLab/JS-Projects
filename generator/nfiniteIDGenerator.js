function* idGenerator(next, end) {
    let id = 1;

    while(true) {
        yield `id_${id}`;
        id++;
    }
}

const generator = idGenerator();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);