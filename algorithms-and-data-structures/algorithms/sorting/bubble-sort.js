const bubbleSort = (arr) => {
    const n = arr.length;

    for (let i = 0; i < n; ++i) {
        let swapped = false;

        for (let j = i + 1; j < n - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }


    return arr;
}

const arr = [1, 9, 2, 8, 3, 7, 4, 6, 5];

console.log(bubbleSort(arr));

/**
 * Time Complexity
 * - Best: O(n²)
 * - Average: O(n²)
 * - Worst: O(n²)
 *
 * Space Complexity
 * - O(1)
 *
 *  Stable: Yes
 */