const mergeSort = (arr) => {
    const n = arr.length;
    if (n <= 1) {
        return arr;
    }

    const mid = Math.floor(n / 2);

    const left = mergeSort(arr.slice(0, mid));
    const rigth = mergeSort(arr.slice(mid));
    
    return merge(left, rigth);
};

const merge = (left, rigth) => {
    const result = [];

    let i = 0;
    let j = 0;

    while (i < left.length && j < rigth.length) {
        if (left[i] <= rigth[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(rigth[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    };

    while (j < rigth.length) {
        result.push(rigth[j]);
        j++;
    }

    return result;
}

const nums = [1, 8, 2, 6, 3, 4, 0, 1, 2, 3, 6];

console.log(mergeSort(nums));

/* Merge Sort
    * Time Complexity:
    * Best:    O(n log n)
    * Average: O(n log n)
    * Worst:   O(n log n)
    *
    * Space Complexity: O(n)
    *
    * Stable: Yes
*/ 