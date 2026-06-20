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
    Write a function that returns true if a 
    value is a primitive type and false otherwise.
*/

function isPrimitive(value) {
    return value === null || 
            (typeof value !== "object" && typeof value !== "function");
}

/* 
    Write a function that returns the sum of two values only if both are numbers; 
    otherwise return the string "Invalid input".
*/

function BothNum(val1, val2) {
    if(Number.isFinite(val1) && Number.isFinite(val2)) return val1 + val2;

    return "Invalid Input";
}

/*
     Write a function that returns true if a number is prime, otherwise false.
*/

function isPrime(num) {
    if (!Number.isFinite(num) || num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for(let i = 3; i <= Math.sqrt(num); i += 2)
    {
        if(num % i === 0) return false;
    }

    return true;
}

/*
    Return true if a string reads the same forward and backward.
*/

function isPalindrome(str) {
    if (typeof str !== "string") return "Invalid Input";

    return str === str.split("").reverse().join("");
}


/*
    Return the factorial of a non-negative integer n.
*/

function Factorial(num) {
    if (!Number.isFinite(num) || num < 0 || !Number.isInteger(num)) return false;

    let fact = 1;

    for (let i = 1; i <= num; ++i)
    {
        fact *= i;
    }

    return fact;
}

/*
    Return the maximum number in a non-empty array.
*/

function maxInArray(array) {
    if (!Array.isArray(array) || array.length === 0) return false;

    let max = array[0];
    let hasNumber = false;

    for (let i = 1; i < array.length; ++i) {
        if (typeof array[i] === "number" && Number.isFinite(array[i])) {
            if (array[i] > max) {
                max = array[i];
                hasNumber = true;
            }
        }
    }

    return hasNumber ? max : false;
}


/*
    Return the sum of all digits of a number (negative numbers included).
*/

function sumDigits(num) {
    if (!Number.isFinite(num) || !Number.isInteger(num)) return false;
    num = Math.abs(num);

    let sum = 0;

    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    return sum;
}


/*
    Reverse the digits of a number while preserving the sign.
*/  

function reverseNumber(n) {
    if (!Number.isFinite(n) || !Number.isInteger(n)) return false;

    let reversed = 0;
    let sign = Math.sign(n);

    n = Math.abs(n);

    while (n > 0) {
        reversed = reversed * 10 + (n % 10);
        n = Math.floor(n / 10);
    }

    return reversed * sign;
}

/*
    Count the vowels (a, e, i, o, u) in a string. Case-insensitive.
*/

function countVowles(str) {
    if (typeof str !== "string") return false;

    let count = 0;
    let vowles = "aeiou";

    str = str.toLowerCase();

    for (let i = 0; i < str.length; ++i)
    {
        if (vowles.includes(str[i]))
        {
            count++;
        }
    }

    return count;
}

/*
    Return the n-th Fibonacci number using an iterative approach.
*/

function fib(n) {
    if (!Number.isFinite(n) || n < 0) return false;

    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; ++i){
        let tmp = a + b;
        a = b;
        b = tmp; 
    }

    return b;
}

/*
    Compare two numbers using a tolerance (epsilon).
*/

function almostEqual(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return false;
    }

    return Math.abs(a - b) < Number.EPSILON;
}

/*
    Convert a value to a number. Return null if the result is NaN.
*/

function toNumberOrNull(value){
    const num = Number(value);

    if (isNaN(num)) return null;

    return num;
}

/*
    Return the exact type of a value
*/

function exactType(value) {
    if (value === null) return "null";

    if (Array.isArray(value)) return "array";

    return typeof value;
}

/*
    Explicitly convert a value to a boolean without using if statements.
*/

function toBoolean(value) 
{
    return Boolean(value)
}

/*
    Return true if a value is a primitive type (including null).
*/

function isPrimitive(value) {
    if (value === null) return true;

    return typeof value !== "object" && typeof value !== "function";
}

/*
    Return true only if the value is an array.
*/

function isArray(value) {
    if (Array.isArray(value)) return true;

    return false;
}