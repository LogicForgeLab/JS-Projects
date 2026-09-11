function* fibonacci() {
    let a = 0;
    let b = 1;
    
    while(true){
        yield a;

        [a, b] = [b, a + b];
    }
}

const generator = fibonacci();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);