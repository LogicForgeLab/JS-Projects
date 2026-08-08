# Employee Management System

A JavaScript Object-Oriented Programming project that implements a simple employee management system using **ES6 Classes**.

## Overview

The project models a company employee hierarchy with a common `Employee` base class and two specialized employee types:

```text
Employee
├── Developer
└── Manager
```

Each subclass extends the functionality of `Employee` with its own properties and methods.

## OOP Concepts

This project demonstrates:

* Classes
* Constructors
* Encapsulation
* Private Fields (`#`)
* Getters and Setters
* Inheritance
* Method Overriding
* Polymorphism
* Input Validation
* `super` keyword

## Class Hierarchy

### Employee

The base class for all employees.

It contains common employee information such as:

* Name
* Base salary

It also provides common functionality for calculating pay and retrieving profile information.

### Developer

Extends `Employee` and represents a software developer.

A developer has additional information related to:

* Programming language
* Number of fixed bugs

The class also provides functionality for writing code and fixing bugs.

### Manager

Extends `Employee` and represents a manager.

A manager has additional information related to:

* Team size
* Number of successful deals

The class provides functionality for conducting meetings and closing deals.

## Encapsulation

Private fields are used to protect internal employee data.

```js
class Employee {
    #name;
    #baseSalary;
}
```

The data is accessed and modified through getters and setters instead of direct access.

## Validation

Setters validate incoming values before modifying private fields.

For example:

* Employee name must be a string.
* Salary must be a non-negative finite number.
* Programming language must be a string.
* Team size must be a non-negative number.

Invalid values result in an `Error`.

## Example

```js
const developer = new Developer(
    "Narek",
    12000,
    "JavaScript"
);

console.log(developer.writeCode());

console.log(developer.fixBug());
console.log(developer.fixBug());
```

```js
const manager = new Manager(
    "Narek",
    15000,
    2
);

console.log(manager.conductMeeting());

console.log(manager.closeDeal());
console.log(manager.closeDeal());
```

## Project Structure

```text
employee-management/
│
├── README.md
├── PRD.md
└── employee.js
```

## Purpose

The main purpose of this project is to practice JavaScript OOP concepts by building a small real-world employee management system.

The project focuses on creating reusable classes, protecting internal data, validating input, and extending functionality through inheritance.
