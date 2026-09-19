# Employee OOP Management System

## Overview

This project demonstrates Object-Oriented Programming (OOP) concepts in JavaScript using two different approaches:

1. **ES6 Classes**
2. **Constructor Functions and Prototypes**

The system represents a simple company employee structure with a base `Employee` entity and two specialized subclasses: `Developer` and `Manager`.

---

## Project Structure

```text
employee-oop/
│
├── README.md
│
├── employee-oop-class/
│   └── employee.js
│
└── employee-oop-prototype/
    └── employee.js
```

### `employee-oop-class`

Contains the implementation using modern JavaScript `class` syntax.

### `employee-oop-prototype`

Contains the implementation using constructor functions and JavaScript prototypes.

Both implementations provide the same functionality.

---

# 1. Employee

`Employee` is the base entity of the system.

It represents a general company employee and contains common employee information.

### Properties

* `name` — employee's full name.
* `baseSalary` — employee's base salary.

### Methods

* `getName()` — returns the employee name.
* `getBaseSalary()` — returns the base salary.
* `calculatePay()` — returns the employee's base salary.
* `getProfileInfo()` — returns general employee information.

---

# 2. Developer

`Developer` extends `Employee`.

It represents a software developer working in the company.

### Additional Properties

* `mainLanguage` — the developer's primary programming language.
* `bugsFixed` — number of bugs fixed by the developer. Defaults to `0`.

### Methods

* `writeCode()` — returns a message indicating that the developer is writing code in their main language.
* `fixBug()` — increments the number of fixed bugs and returns an updated status.
* `getProfileInfo()` — returns employee information together with developer-specific information.

### Example

```js
const developer = new Developer(
    "Narek",
    20000,
    "JavaScript"
);

console.log(developer.writeCode());

console.log(developer.fixBug());
console.log(developer.fixBug());

console.log(developer.getProfileInfo());
```

---

# 3. Manager

`Manager` extends `Employee`.

It represents an employee responsible for managing a team and handling business operations.

### Additional Properties

* `teamSize` — number of employees in the manager's team.
* `successfulDeals` — number of successfully closed deals. Defaults to `0`.

### Methods

* `conductMeeting()` — returns a message about a team meeting.
* `closeDeal()` — increments the successful deals counter and returns an updated status.
* `getProfileInfo()` — returns employee information together with manager-specific information.

### Example

```js
const manager = new Manager(
    "Narek",
    25000,
    5
);

console.log(manager.conductMeeting());

console.log(manager.closeDeal());
console.log(manager.closeDeal());

console.log(manager.getProfileInfo());
```

---

# 4. OOP Concepts Demonstrated

This project demonstrates the following JavaScript OOP concepts:

### Encapsulation

Employee and subclass data is controlled through getters and setters.

For example:

```js
employee.setBaseSalary(15000);

console.log(employee.getBaseSalary());
```

The internal properties are not accessed directly through the public API.

---

### Inheritance

`Developer` and `Manager` inherit common functionality from `Employee`.

```text
Employee
├── Developer
└── Manager
```

In the Class implementation:

```js
class Developer extends Employee
```

In the Prototype implementation:

```js
Developer.prototype = Object.create(Employee.prototype);
```

---

### Polymorphism

Subclasses can provide their own implementation of methods such as `getProfileInfo()` while reusing the parent's functionality.

Prototype implementation:

```js
Employee.prototype.getProfileInfo.call(this)
```

Class implementation:

```js
super.getProfileInfo()
```

---

### Abstraction

The `Employee` class/function provides common functionality that can be reused by specialized employee types.

---

# 5. Two JavaScript Implementations

## Class-Based Implementation

The `employee-oop-class` directory uses modern ES6+ JavaScript classes.

Example:

```js
class Employee {
    #name;
    #baseSalary;

    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
}
```

Private fields are represented using `#`.

---

## Prototype-Based Implementation

The `employee-oop-prototype` directory uses constructor functions and prototypes.

Example:

```js
const Employee = function(name, baseSalary) {
    this.setName(name);
    this.setBaseSalary(baseSalary);
};

Employee.prototype.getName = function() {
    return this._name;
};
```

Inheritance is implemented using:

```js
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;
```

---

# 6. Validation

The project includes input validation for important properties.

Examples:

* Employee name must be a string.
* Base salary must be a non-negative number.
* Developer language must be a string.
* Bugs fixed must be a non-negative number.
* Team size must be a non-negative number.
* Successful deals must be a non-negative number.

Invalid values throw an `Error`.

Example:

```js
const employee = new Employee("Narek", -5000);
```

This will throw an error because the salary cannot be negative.

---

# 7. Testing

Each implementation can be tested by creating instances and calling their methods.

Example:

```js
const employee = new Employee("Narek", 15000);

console.log(employee.getProfileInfo());

const developer = new Developer(
    "Arman",
    20000,
    "JavaScript"
);

console.log(developer.writeCode());
console.log(developer.fixBug());

const manager = new Manager(
    "Narek",
    25000,
    5
);

console.log(manager.conductMeeting());
console.log(manager.closeDeal());
```

---

## Goal

The main goal of this project is to practice and demonstrate JavaScript OOP concepts through two different implementation styles:

* **ES6 Classes**
* **Constructor Functions + Prototypes**

Both implementations model the same employee management system while demonstrating different approaches to inheritance, encapsulation, reusable methods, and object creation.
