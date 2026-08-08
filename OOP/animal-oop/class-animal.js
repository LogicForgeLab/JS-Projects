class Animal {
    #name;
    #age;
    #energy;

    constructor(name, age, energy) {
        this.#name = name;
        this.#age = age;
        this.energy = energy;
    }

    set name(value) {
        this.#name = value;
    }

    get name() {
        return this.#name;
    }

    set age(value) {
        this.#age = value;
    }

    get age() {
        return this.#age;
    }

    set energy(value) {
        this.#energy = Math.min(Math.max(value, 0), 100);
    }

    get energy() {
        return this.#energy;
    }

    eat(food = 20) {
        this.energy += food;
        return this.energy;
    }

    sleep(hours = 1) {
        this.energy += hours * 10;
        return this.energy;
    }

    getInfo() {
        return {
            name: this.#name,
            age: this.#age,
            energy: this.#energy,
        };
    }
}

class Predator extends Animal {
    #isHungry;

    constructor(name, age, energy, isHungry = true) {
        super(name, age, energy);
        this.#isHungry = isHungry;
    }

    get isHungry() {
        return this.#isHungry;
    }

    set isHungry(value) {
        this.#isHungry = value;
    }

    hunt() {
        if (this.energy < 30) {
            console.log("Not enough energy to hunt.");
            return;
        }

        this.energy -= 30;
        this.#isHungry = false;

        console.log("Hunt successful.");
    }

    getInfo() {
        return {
            ...super.getInfo(),
            predator: true,
            isHungry: this.#isHungry,
        };
    }
}

class Lion extends Predator {
    #prideName;

    constructor(name, age, energy, prideName) {
        super(name, age, energy);
        this.#prideName = prideName;
    }

    get prideName() {
        return this.#prideName;
    }

    set prideName(value) {
        this.#prideName = value;
    }

    roar() {
        if (this.energy < 10) {
            console.log("Not enough energy to roar.");
            return;
        }

        this.energy -= 10;
        console.log("Roar!");
    }

    getInfo() {
        return {
            ...super.getInfo(),
            prideName: this.#prideName,
        };
    }
}

class Herbivore extends Animal {
    #favoritePlant;

    constructor(name, age, energy, favoritePlant) {
        super(name, age, energy);
        this.#favoritePlant = favoritePlant;
    }

    get favoritePlant() {
        return this.#favoritePlant;
    }

    set favoritePlant(value) {
        this.#favoritePlant = value;
    }

    graze() {
        this.eat(10);
        console.log("Graze successful.");
    }

    getInfo() {
        return {
            ...super.getInfo(),
            favoritePlant: this.#favoritePlant,
        };
    }
}

class Rabbit extends Herbivore {
    #jumpHeight;

    constructor(name, age, energy, favoritePlant, jumpHeight) {
        super(name, age, energy, favoritePlant);
        this.#jumpHeight = jumpHeight;
    }

    get jumpHeight() {
        return this.#jumpHeight;
    }

    set jumpHeight(value) {
        this.#jumpHeight = value;
    }

    jump() {
        if (this.energy < 5) {
            console.log("Not enough energy to jump.");
            return;
        }

        this.energy -= 5;
        console.log("Jump successful.");
    }

    graze() {
        if (this.energy < 5) {
            console.log("Not enough energy to graze.");
            return;
        }

        this.energy -= 5;
        this.eat(30);

        console.log("Rabbit grazed successfully.");
    }

    getInfo() {
        return {
            ...super.getInfo(),
            jumpHeight: this.#jumpHeight,
        };
    }
}



const simba = new Lion(
    "Simba",
    5,
    80,
    "Pride Rock"
);

console.log(simba.getInfo());

simba.roar();
simba.hunt();
simba.sleep(2);
simba.eat(15);

console.log(simba.getInfo());


const bunny = new Rabbit(
    "Bunny",
    2,
    60,
    "Carrot",
    120
);

console.log(bunny.getInfo());

bunny.jump();
bunny.graze();
bunny.sleep(1);

console.log(bunny.getInfo());