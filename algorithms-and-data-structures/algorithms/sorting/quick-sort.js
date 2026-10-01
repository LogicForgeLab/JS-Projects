const quickSort = (arr, low = 0, high = arr.length - 1) => {
    const n = arr.length;

    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }

    return arr;
};

const partition = (arr, low, high) => {
    const pivot = arr[high];

    let i = low;

    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }

    [arr[i], arr[high]] = [arr[high], arr[i]];

    return i;
}

const nums = [1, 9, 4, 6, 20, 1, 2, 4, 34, 5, 7, 8];

console.log(quickSort(nums));


/* Quick Sort
    * Time Complexity:
    * Best:    O(n log n)
    * Average: O(n log n)
    * Worst:   O(n²)
    *
    * Space Complexity:
    * Best:    O(log n)
    * Average: O(log n)
    * Worst:   O(n)
    *
    * Stable: No
*/ 
