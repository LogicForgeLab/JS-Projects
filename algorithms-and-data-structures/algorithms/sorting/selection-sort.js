const selectionSort = (arr) => {
    const n = arr.length;

    for (let i = 0; i < n - 1; ++i) {
        let mixIdx = i;

        for (let j = i + 1; j < n; ++j) {
            if (arr[j] < arr[mixIdx]) {
                mixIdx = j;
            }
        }

        if (mixIdx !== i) {
            [arr[i], arr[mixIdx]] = [arr[mixIdx], arr[i]];
        }
    }

    return arr;
}

const arr = [20, 34, 1, 4, 3, 55, 32, 56, 61];

console.log(selectionSort(arr));

/**
 * Time Complexity
 * - Best: O(n²)
 * - Average: O(n²)
 * - Worst: O(n²)
 *
 * Space Complexity
 * - O(1)
 *
 *  Stable: No
 */