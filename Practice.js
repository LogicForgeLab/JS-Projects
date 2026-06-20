/*  
    Write a function that takes a string as an argument 
    and returns the number of characters in the string 
*/

function CharCount(str) {
    if (typeof str === "string") {
        return str.length;
    }

    return "Invalid Input";
}

/* 
    Create a function that converts a 
    given string to uppercase.
*/

function ToUpperCase(str) {
    if (typeof str === "string") {
        return str.toLocaleUpperCase();
    }

    return "invalid Input";
}


/*
    Write a function that accepts 
    two numbers and returns their sum.
*/

function TwoSum(num1, num2) {
    if (Number.isFinite(num1) && Number.isFinite(num2)) 
    {
        return num1 + num2;
    }

    return "Invlid Input";
}

/* 
    Reverse the string "hello" 
    without using a built-in function.
*/

function ReverseStr(str)
{
    let newStr = [];

    if(typeof str === "string") {
        for(let i = str.length - 1; i >=0; --i)
        {
            newStr += str[i]
        }
    }
    return newStr;
}

/*
    Check if the string "Learning JavaScript" 
    contains the substring "Java".
*/

function ContainsJava(str) {
    if (typeof str === "string") {
        return str.includes("Java");
    }

    return "Invlid Input"
}

/*
    Find the index of the value 9 in the 
    array let numList = [3, 6, 9, 12];.
*/

function IndexTheValue(array)
{
    return array.indexOf(9);
}

/*
    Compute the sum of all elements in 
    the array let expenses = [50, 75, 100];
*/

function AllSum(array) {
    let sum = 0;

    for(let i = 0; i < array.length; ++i)
    {
        if (typeof array[i] !== "number") {
            return "Invalid Input";
        }
        sum += array[i];
    }

    return sum;
}

/*
    Write a function to check if a given 
    string contains another substring.
*/

function containsSubstring(str, subStr) {
    if (typeof str !== "string" || typeof subStr !== "string") {
        return "Invalid Input";
    }

    return str.includes(subStr);
}


/*
    Write a function that returns the sum of 
    all elements in an array of numbers.
*/

function ArraySum(array) {
    let sum = 0;

    for(let i = 0; i < array.length; ++i)
    {
        if (!Number.isFinite(array[i])) {
            return "Invlid Input"
        }

        sum += array[i];
    }

    return sum;
}


/*
    Create a function that accepts a number 
    and returns whether it is even or odd.
*/

function EvenOrOdd(num) {
    if (!Number.isInteger(num)) {
        return "Invalid Input"
    }

    if (num % 2 === 0) {
        return "Even"
    }

    return "Odd";
}

/*
    Write a function that returns the exact type of a given value and correctly 
    handles null, arrays, objects, and functions (typeof alone is not sufficient).
*/

function getType(value) {
    if(value === null) return "Null";

    if(Array.isArray(value)) return "Array";

    return typeof value;
}

/*
    Write a function that returns true if a given value is falsy and false otherwise; 
    test it with 0, "", null, undefined, NaN, and false.
*/

function isFalsy(value) {
    return !value
}

/*
    Write a function that compares two values and returns an object 
    containing the results of both loose (==) and strict (===) comparison;
*/

function CompareValues(a, b) {
    return {
        LooseEquality: a == b,
        StrictEquality: a === b
    };
}

/*
    Write a function that returns true only if a value 
    is a number, not NaN, finite, and a safe integer.
*/

function isSafeNumber(num) {
    return Number.isSafeInteger(num)
}

/*
    Write a function that attempts to convert a 
    value to a number and returns null if the result is NaN.
*/

function toNumber(value) {
    let num = Number(value);

    if(Number.isNaN(num)) return null;

    return num;
}

/*
    Write a function that explicitly converts any 
    value to a boolean without using if statements.
*/

function toBoolean(value) {
    return Boolean(value);
}

/*
    Write a function that returns true only for plain 
    objects and false for arrays, null, and functions.
*/

function PlainObj(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value);
}

/*

*/