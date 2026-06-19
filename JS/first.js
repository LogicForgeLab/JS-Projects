function CharCount(str) {
    if (typeof str === "string") {
        return str.length;
    }

    return "Invalid Input";
}

console.log(CharCount("hello"));
console.log(CharCount(NaN));
console.log(CharCount(undefined))
console.log(CharCount(12));

