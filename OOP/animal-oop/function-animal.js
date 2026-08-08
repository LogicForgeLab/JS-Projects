// ==================== ANIMAL ====================

function Animal(name, age, energy = 100) {
    this.setName(name);
    this.setAge(age);
    this.setEnergy(energy);
}

Animal.prototype.setName = function(value) {
    if (typeof value !== "string") {
        throw new Error("Name must be a string.");
    }

    this._name = value;
};

Animal.prototype.getName = function() {
    return this._name;
};


Animal.prototype.setAge = function(value) {
    if (typeof value !== "number" || value < 0 || value > 50) {
        throw new Error("Age must be between 0 and 50.");
    }

    this._age = value;
};

Animal.prototype.getAge = function() {
    return this._age;
};


Animal.prototype.setEnergy = function(value) {
    if (typeof value !== "number") {
        throw new Error("Energy must be a number.");
    }

    this._energy = Math.max(0, Math.min(value, 100));
};

Animal.prototype.getEnergy = function() {
    return this._energy;
};


Animal.prototype.eat = function(food = 20) {
    if (typeof food !== "number" || food < 0) {
        throw new Error("Food must be a positive number.");
    }

    this.setEnergy(this.getEnergy() + food);
};


Animal.prototype.sleep = function(hours) {
    if (typeof hours !== "number" || hours < 0) {
        throw new Error("Hours must be a positive number.");
    }

    this.setEnergy(this.getEnergy() + hours * 10);
};


Animal.prototype.getInfo = function() {
    return {
        name: this.getName(),
        age: this.getAge(),
        energy: this.getEnergy()
    };
};


// ==================== PREDATOR ====================

const Predator = function(name, age, energy, isHungry = true) {
    Animal.call(this, name, age, energy);

    this.setIsHungry(isHungry);
};

Predator.prototype = Object.create(Animal.prototype);
Predator.prototype.constructor = Predator;


Predator.prototype.setIsHungry = function(value) {
    if (typeof value !== "boolean") {
        throw new Error("isHungry must be a boolean.");
    }

    this._isHungry = value;
};

Predator.prototype.getIsHungry = function() {
    return this._isHungry;
};


Predator.prototype.hunt = function() {
    if (this.getEnergy() < 30) {
        throw new Error("Not enough energy to hunt.");
    }

    this.setEnergy(this.getEnergy() - 30);
    this.setIsHungry(false);
};


Predator.prototype.getInfo = function() {
    return {
        ...Animal.prototype.getInfo.call(this),
        isPredator: true,
        isHungry: this.getIsHungry()
    };
};


// ==================== LION ====================

const Lion = function(name, age, energy, prideName) {
    Predator.call(this, name, age, energy);

    this.setPrideName(prideName);
};

Lion.prototype = Object.create(Predator.prototype);
Lion.prototype.constructor = Lion;


Lion.prototype.setPrideName = function(value) {
    if (typeof value !== "string") {
        throw new Error("Pride name must be a string.");
    }

    this._prideName = value;
};

Lion.prototype.getPrideName = function() {
    return this._prideName;
};


Lion.prototype.roar = function() {
    if (this.getEnergy() < 10) {
        throw new Error("Not enough energy to roar.");
    }

    this.setEnergy(this.getEnergy() - 10);
};


Lion.prototype.hunt = function() {
    Predator.prototype.hunt.call(this);
};


Lion.prototype.getInfo = function() {
    return {
        ...Predator.prototype.getInfo.call(this),
        prideName: this.getPrideName()
    };
};


// ==================== HERBIVORE ====================

const Herbivore = function(name, age, energy, favoritePlant) {
    Animal.call(this, name, age, energy);

    this.setFavoritePlant(favoritePlant);
};

Herbivore.prototype = Object.create(Animal.prototype);
Herbivore.prototype.constructor = Herbivore;


Herbivore.prototype.setFavoritePlant = function(value) {
    if (typeof value !== "string") {
        throw new Error("Favorite plant must be a string.");
    }

    this._favoritePlant = value;
};

Herbivore.prototype.getFavoritePlant = function() {
    return this._favoritePlant;
};


Herbivore.prototype.graze = function() {
    if (this.getEnergy() < 10) {
        throw new Error("Not enough energy to graze.");
    }

    this.setEnergy(this.getEnergy() - 10);
    this.setEnergy(this.getEnergy() + 15);
};


Herbivore.prototype.getInfo = function() {
    return {
        ...Animal.prototype.getInfo.call(this),
        isHerbivore: true,
        favoritePlant: this.getFavoritePlant()
    };
};


// ==================== RABBIT ====================

const Rabbit = function(
    name,
    age,
    energy,
    favoritePlant,
    jumpHeight
) {
    Herbivore.call(
        this,
        name,
        age,
        energy,
        favoritePlant
    );

    this.setJumpHeight(jumpHeight);
};

Rabbit.prototype = Object.create(Herbivore.prototype);
Rabbit.prototype.constructor = Rabbit;


Rabbit.prototype.setJumpHeight = function(value) {
    if (typeof value !== "number" || value < 0) {
        throw new Error("Jump height must be a positive number.");
    }

    this._jumpHeight = value;
};

Rabbit.prototype.getJumpHeight = function() {
    return this._jumpHeight;
};


Rabbit.prototype.jump = function() {
    if (this.getEnergy() < 5) {
        throw new Error("Not enough energy to jump.");
    }

    this.setEnergy(this.getEnergy() - 5);
};


Rabbit.prototype.graze = function() {
    if (this.getEnergy() < 5) {
        throw new Error("Not enough energy to graze.");
    }

    this.setEnergy(this.getEnergy() - 5);
    this.setEnergy(this.getEnergy() + 10);
};


Rabbit.prototype.getInfo = function() {
    return {
        ...Herbivore.prototype.getInfo.call(this),
        jumpHeight: this.getJumpHeight()
    };
};

