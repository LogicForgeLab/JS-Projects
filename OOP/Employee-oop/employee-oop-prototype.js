const Employee = function(name, baseSalary) {
    this.setName(name);
    this.setBaseSalary(baseSalary);
};

Employee.prototype.setName = function(value) {
    if (typeof value !== "string") {
        throw new Error("Name must be a string.");
    }

    this._name = value;
};

Employee.prototype.getName = function() {
    return this._name;
};

Employee.prototype.setBaseSalary = function(value) {
    if (
        typeof value !== "number" ||
        !Number.isFinite(value) ||
        value < 0
    ) {
        throw new Error("Base salary must be a non-negative number.");
    }

    this._baseSalary = value;
};

Employee.prototype.getBaseSalary = function() {
    return this._baseSalary;
};

Employee.prototype.calculatePay = function() {
    return this.getBaseSalary();
};

Employee.prototype.getProfileInfo = function() {
    return {
        name: this.getName(),
        baseSalary: this.getBaseSalary(),
        calculatePay: this.calculatePay()
    };
};


// ==================== Developer ====================

const Developer = function(
    name,
    baseSalary,
    mainLanguage,
    bugsFixed = 0
) {
    Employee.call(this, name, baseSalary);

    this.setMainLanguage(mainLanguage);
    this.setBugsFixed(bugsFixed);
};

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.setMainLanguage = function(value) {
    if (typeof value !== "string") {
        throw new Error("Language must be a string.");
    }

    this._mainLanguage = value;
};

Developer.prototype.getMainLanguage = function() {
    return this._mainLanguage;
};

Developer.prototype.setBugsFixed = function(value) {
    if (
        typeof value !== "number" ||
        !Number.isFinite(value) ||
        value < 0
    ) {
        throw new Error(
            "Bugs fixed must be a non-negative number."
        );
    }

    this._bugsFixed = value;
};

Developer.prototype.getBugsFixed = function() {
    return this._bugsFixed;
};

Developer.prototype.writeCode = function() {
    return `${this.getName()} is writing code in ${this.getMainLanguage()}.`;
};

Developer.prototype.fixBug = function() {
    this._bugsFixed++;

    return `Bug fixed. Total bugs fixed: ${this._bugsFixed}.`;
};

Developer.prototype.getProfileInfo = function() {
    return {
        ...Employee.prototype.getProfileInfo.call(this),
        mainLanguage: this.getMainLanguage(),
        bugsFixed: this.getBugsFixed()
    };
};


// ==================== Manager ====================

const Manager = function(
    name,
    baseSalary,
    teamSize,
    successfulDeals = 0
) {
    Employee.call(this, name, baseSalary);

    this.setTeamSize(teamSize);
    this.setSuccessfulDeals(successfulDeals);
};

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.setTeamSize = function(value) {
    if (
        typeof value !== "number" ||
        !Number.isFinite(value) ||
        value < 0
    ) {
        throw new Error(
            "Team size must be a non-negative number."
        );
    }

    this._teamSize = value;
};

Manager.prototype.getTeamSize = function() {
    return this._teamSize;
};

Manager.prototype.setSuccessfulDeals = function(value) {
    if (
        typeof value !== "number" ||
        !Number.isFinite(value) ||
        value < 0
    ) {
        throw new Error(
            "Successful deals must be a non-negative number."
        );
    }

    this._successfulDeals = value;
};

Manager.prototype.getSuccessfulDeals = function() {
    return this._successfulDeals;
};

Manager.prototype.conductMeeting = function() {
    return `${this.getName()} is conducting a team meeting with ${this.getTeamSize()} employees.`;
};

Manager.prototype.closeDeal = function() {
    this._successfulDeals++;

    return `Deal closed. Total successful deals: ${this.getSuccessfulDeals()}.`;
};

Manager.prototype.getProfileInfo = function() {
    return {
        ...Employee.prototype.getProfileInfo.call(this),
        teamSize: this.getTeamSize(),
        successfulDeals: this.getSuccessfulDeals()
    };
};


// ==================== Employee Test ====================

const employee = new Employee("Narek", 15000);

console.log("----- Employee -----");

console.log(employee.getName());
// Narek

console.log(employee.getBaseSalary());
// 15000

console.log(employee.calculatePay());
// 15000

console.log(employee.getProfileInfo());
// {
//   name: "Narek",
//   baseSalary: 15000,
//   calculatePay: 15000
// }


// ==================== Developer Test ====================

const developer = new Developer(
    "Arman",
    20000,
    "JavaScript"
);

console.log("----- Developer -----");

console.log(developer.getName());
// Arman

console.log(developer.getBaseSalary());
// 20000

console.log(developer.getMainLanguage());
// JavaScript

console.log(developer.getBugsFixed());
// 0

console.log(developer.writeCode());
// Arman is writing code in JavaScript.

console.log(developer.fixBug());
// Bug fixed. Total bugs fixed: 1.

console.log(developer.fixBug());
// Bug fixed. Total bugs fixed: 2.

console.log(developer.getProfileInfo());
// {
//   name: "Arman",
//   baseSalary: 20000,
//   calculatePay: 20000,
//   mainLanguage: "JavaScript",
//   bugsFixed: 2
// }


// ==================== Manager Test ====================

const manager = new Manager(
    "Narek",
    25000,
    5
);

console.log("----- Manager -----");

console.log(manager.getName());
// Narek

console.log(manager.getBaseSalary());
// 25000

console.log(manager.getTeamSize());
// 5

console.log(manager.getSuccessfulDeals());
// 0

console.log(manager.conductMeeting());
// Narek is conducting a team meeting with 5 employees.

console.log(manager.closeDeal());
// Deal closed. Total successful deals: 1.

console.log(manager.closeDeal());
// Deal closed. Total successful deals: 2.

console.log(manager.getProfileInfo());
// {
//   name: "Narek",
//   baseSalary: 25000,
//   calculatePay: 25000,
//   teamSize: 5,
//   successfulDeals: 2
// }

