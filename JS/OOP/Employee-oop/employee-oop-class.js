class Employee {
    #name;
    #baseSalary;

    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    set name(value) {
        if (typeof value !== "string") {
            throw new Error("Name must be a string.");
        }

        this.#name = value;
    }

    get name() {
        return this.#name;
    }

    set baseSalary(value) {
        if (
            typeof value !== "number" ||
            !Number.isFinite(value) ||
            value < 0
        ) {
            throw new Error("Base salary must be a non-negative number.");
        }

        this.#baseSalary = value;
    }

    get baseSalary() {
        return this.#baseSalary;
    }

    calculatePay() {
        return this.#baseSalary;
    }

    getProfileInfo() {
        return {
            name: this.#name,
            baseSalary: this.#baseSalary
        };
    }
}


class Developer extends Employee {
    #mainLanguage;
    #bugsFixed;

    constructor(name, baseSalary, mainLanguage, bugsFixed = 0) {
        super(name, baseSalary);

        this.mainLanguage = mainLanguage;
        this.bugsFixed = bugsFixed;
    }

    set mainLanguage(value) {
        if (typeof value !== "string") {
            throw new Error("Language must be a string.");
        }

        this.#mainLanguage = value;
    }

    get mainLanguage() {
        return this.#mainLanguage;
    }

    set bugsFixed(value) {
        if (
            typeof value !== "number" ||
            !Number.isFinite(value) ||
            value < 0
        ) {
            throw new Error("Bugs fixed must be a non-negative number.");
        }

        this.#bugsFixed = value;
    }

    get bugsFixed() {
        return this.#bugsFixed;
    }

    writeCode() {
        return `${this.name} is writing code in ${this.#mainLanguage}.`;
    }

    fixBug() {
        this.#bugsFixed++;

        return `Bug fixed. Total bugs fixed: ${this.#bugsFixed}.`;
    }

    getProfileInfo() {
        return {
            ...super.getProfileInfo(),
            mainLanguage: this.#mainLanguage,
            bugsFixed: this.#bugsFixed
        };
    }
}


class Manager extends Employee {
    #teamSize;
    #successfulDeals;

    constructor(
        name,
        baseSalary,
        teamSize,
        successfulDeals = 0
    ) {
        super(name, baseSalary);

        this.teamSize = teamSize;
        this.#successfulDeals = successfulDeals;
    }

    set teamSize(value) {
        if (
            typeof value !== "number" ||
            !Number.isFinite(value) ||
            value < 0
        ) {
            throw new Error(
                "Team size must be a non-negative number."
            );
        }

        this.#teamSize = value;
    }

    get teamSize() {
        return this.#teamSize;
    }

    get successfulDeals() {
        return this.#successfulDeals;
    }

    conductMeeting() {
        return `${this.name} is conducting a team meeting with ${this.#teamSize} employees.`;
    }

    closeDeal() {
        this.#successfulDeals++;

        return `Deal closed. Total successful deals: ${this.#successfulDeals}.`;
    }

    getProfileInfo() {
        return {
            ...super.getProfileInfo(),
            teamSize: this.#teamSize,
            successfulDeals: this.#successfulDeals
        };
    }
}


// ==================== TEST ====================

const manager = new Manager(
    "Narek",
    15000,
    2,
    1
);

console.log(manager.getProfileInfo());
console.log(manager.conductMeeting());
console.log(manager.closeDeal());
console.log(manager.closeDeal());
console.log(manager.getProfileInfo());



const developer = new Developer(
    "Narek",
    12000,
    "JavaScript"
);

console.log(developer.getProfileInfo());
console.log(developer.writeCode());
console.log(developer.fixBug());
console.log(developer.fixBug());
console.log(developer.getProfileInfo());