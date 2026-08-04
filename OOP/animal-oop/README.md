# Animal Hierarchy OOP (JavaScript)

A simple Object-Oriented Programming (OOP) project built with modern JavaScript (ES6+). This project demonstrates inheritance, encapsulation, polymorphism, and method overriding through an animal hierarchy.

## Features

* ES6 Classes
* Private Fields (`#`)
* Getters & Setters
* Inheritance
* Method Overriding
* Encapsulation
* Energy Management System
* Animal Behaviors

## Class Hierarchy

```text
Animal
├── Predator
│   └── Lion
└── Herbivore
    └── Rabbit
```

## Classes

### Animal

Base class for all animals.

**Properties**

* `name`
* `age`
* `energy`

**Methods**

* `eat()`
* `sleep()`
* `getInfo()`

---

### Predator

Extends `Animal`.

**Additional Property**

* `isHungry`

**Methods**

* `hunt()`
* `getInfo()`

---

### Lion

Extends `Predator`.

**Additional Property**

* `prideName`

**Methods**

* `roar()`
* `getInfo()`

---

### Herbivore

Extends `Animal`.

**Additional Property**

* `favoritePlant`

**Methods**

* `graze()`
* `getInfo()`

---

### Rabbit

Extends `Herbivore`.

**Additional Property**

* `jumpHeight`

**Methods**

* `jump()`
* `graze()` *(overridden)*
* `getInfo()`

## OOP Concepts Used

* Encapsulation
* Inheritance
* Polymorphism
* Method Overriding
* Abstraction
* Composition of Behaviors

## Technologies

* JavaScript (ES6+)
* Object-Oriented Programming

## Project Structure

```text
.
├── animal-hierarchy.js
└── README.md
```

## Example

```javascript
const simba = new Lion(
    "Simba",
    5,
    80,
    "Pride Rock"
);

console.log(simba.getInfo());

simba.roar();
simba.hunt();

console.log(simba.getInfo());
```

## Learning Goals

This project was created to practice:

* JavaScript Classes
* Private Fields
* Getters & Setters
* Inheritance
* Method Overriding
* Clean OOP Design

## License

This project is intended for educational purposes.
