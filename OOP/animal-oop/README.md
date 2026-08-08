# Animal OOP — Prototype-Based Inheritance

A JavaScript Object-Oriented Programming project built using **Constructor Functions** and **Prototype-based Inheritance**.

## Project Overview

This project demonstrates how to implement OOP concepts in JavaScript without using ES6 `class` syntax.

The project contains an `Animal` base constructor and several derived constructors:

```text
Animal
├── Predator
│   └── Lion
│
└── Herbivore
    └── Rabbit
```

## Concepts Used

* Constructor Functions
* Prototypes
* Prototype Inheritance
* Method Overriding
* `Object.create()`
* `Function.prototype.call()`
* Encapsulation using `_` convention
* Getters and Setters
* Validation
* `Math.min()` and `Math.max()`
* Object Spread Syntax
* Error Handling

## Project Structure

```text
animal-oop/
│
├── README.md
├── animal.js
└── test.js
```

### `animal.js`

Contains all constructors and prototype methods:

* `Animal`
* `Predator`
* `Lion`
* `Herbivore`
* `Rabbit`

### `test.js`

Contains tests for:

* Creating objects
* Getters and setters
* Energy management
* Hunting
* Roaring
* Grazing
* Jumping
* Error handling
* Inheritance

## Animal

The base constructor contains:

* `name`
* `age`
* `energy`

### Methods

```text
setName()
getName()

setAge()
getAge()

setEnergy()
getEnergy()

eat()
sleep()
getInfo()
```

Energy is clamped between `0` and `100`:

```js
Math.max(0, Math.min(value, 100))
```

## Predator

`Predator` inherits from `Animal`.

Additional property:

```text
isHungry
```

### Methods

```text
setIsHungry()
getIsHungry()
hunt()
getInfo()
```

`hunt()`:

* Requires at least 30 energy
* Removes 30 energy
* Changes `isHungry` to `false`

## Lion

`Lion` inherits from `Predator`.

Additional property:

```text
prideName
```

### Methods

```text
setPrideName()
getPrideName()
roar()
hunt()
getInfo()
```

`roar()` consumes 10 energy.

`hunt()` overrides the parent method and uses the `Predator` hunting logic.

## Herbivore

`Herbivore` inherits from `Animal`.

Additional property:

```text
favoritePlant
```

### Methods

```text
setFavoritePlant()
getFavoritePlant()
graze()
getInfo()
```

`graze()`:

```text
Energy -10
Energy +15
--------------
Net +5
```

## Rabbit

`Rabbit` inherits from `Herbivore`.

Additional property:

```text
jumpHeight
```

### Methods

```text
setJumpHeight()
getJumpHeight()
jump()
graze()
getInfo()
```

`jump()` consumes 5 energy.

`graze()` overrides the Herbivore version:

```text
Energy -5
Energy +10
--------------
Net +5
```

## Example

```js
const lion = new Lion(
    "Simba",
    8,
    100,
    "Pride Rock"
);

lion.roar();
lion.hunt();

console.log(lion.getInfo());
```

## Running the Project

Make sure Node.js is installed.

Run:

```bash
node test.js
```

## Learning Goals

The main goal of this project is to understand how JavaScript OOP works internally using:

```js
Constructor Functions
        ↓
Prototype
        ↓
Object.create()
        ↓
Inheritance
        ↓
Method Overriding
```

## Author

Narek

JavaScript OOP Practice Project
