// Array.prototype.at()

function myAt(array, index) {
    if (index < 0) {
        index += array.length;
    }
    
    return array[index];
}


// Array.prototype.concat

function myConcat(arr, value) {
    const result = [];

    for (const item of arr) {
        result.push(item);
    }

    if (Array.isArray(value)) {
        for (const item of value) {
            result.push(item);
        }
    } else {
        result.push(value);
    }

    return result;
}

// Array.prototype.push()

function myPush(array, ...args){
    for (let i = 0; i < args.length; ++i) {
        array[array.length] = args[i];
    }

    return array.length;
}


// Array.prototype.pop()

Array.prototype.myPop = function () {
    let len = this.length;

    if (len === 0) {
        this.length = 0;
        return undefined;
    }

    const index = len - 1;
    const value = this[index];

    delete this[index];
    this.length = index;

    return value;
};


// Array.prototype.shift()

Array.prototype.myShift = function() {
    let len = this.length;

    if (len === 0) {
        this.len = 0;
        return undefined;
    }

    const first = this[0];

    for (let i = 1; i < len; i++) {
        this[i - 1] = this[i];
    }

    delete this[len - 1];
    this.length = len - 1;
    return first;
}


// Array.prototype.unshift()

Array.prototype.myUnshift = function(...args) {
    let len = this.length;
    let addCount = args.length; 

    if (len === 0) {
        this.len = 0;
        return undefined;
    }

    for (let i = len - 1; i >= 0; --i) {
        this[i + addCount] = this[i];
    }

    for (let i = 0; i < addCount; i++) {
        this[i] = args[i];
    }

    this.length = addCount + len;

    return this.length;
}


// Array.prototype.map()

Array.prototype.myMap = function (cb, thisArg) {
    thisArg ??= globalThis;

    const res = [];
    const size = this.length;

    for (let i = 0; i < size; ++i) {
        if (i in this) {
            res.push(cb.call(thisArg, this[i], i, this));
        } else {
            ++res.length;
        }
    }

    return res;
};


// Array.prototype.filter()

Array.prototype.myFilter = function (callbackFn, thisArg) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (i in this) { 
            if (callbackFn.call(thisArg, this[i], i, this)) {
                result.push(this[i]);
            }
        }
    }

    return result;
};

// Array.prototype.reduce()

Array.prototype.myReduce = function (callBackfn, initialValue) {
    let acumlator;
    let startIndex;

    if (initialValue !== undefined) {
        acumlator = initialValue;
        startIndex = 0;
    } else {
        if (this.length === 0) {
            throw new Error("Reduce of empty array with no initial value");
        }
        
        acumlator = this[0];
        startIndex = 1;

    }

    for (let i = startIndex; i < this.length; ++i) {
        acumlator = callBackfn(acumlator, this[i], i, this)
    }

    return acumlator;
}


// Array.protptype.find()

Array.prototype.myFind = function (callbackFn, thisArg) {
    if (this == null) {
        throw new TypeError("Array.prototype.find called on null or undefined");
    }

    if (typeof callbackFn !== "function") {
        throw new TypeError(callbackFn + " is not a function");
    }

    const obj = Object(this);
    const length = obj.length >>> 0;

    for (let i = 0; i < length; i++) {
        const value = obj[i];

        if (callbackFn.call(thisArg, value, i, obj)) {
            return value;
        }
    }

    return undefined;
};


// Array.prototype.flat()

Array.prototype.myFlat = function (depth = 1) {
    let result = [];

    function flatten(arr, currentDepth) {
        for (let i = 0; i < arr.length; ++i) {
            if (!(i in arr)) continue;

            if (Array.isArray(arr[i]) && currentDepth > 0) {
                flatten(arr[i], currentDepth - 1);
            } else {
                result.push(arr[i]);
            }
        }
    }

    flatten(this, depth);
    return result;
}



// Array.prototype.reverse()

Array.prototype.myReverse = function () {
    let left = 0;
    let right = this.length - 1;

    while (left < right) {
        let temp = this[left];
        this[left] = this[right];
        this[right] = temp;

        left++;
        right--;
    }

    return this;
}



