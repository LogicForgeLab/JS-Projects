const countingSort = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    const countArray = new Array(max - min + 1).fill(0);

    for (const num of arr) {
        countArray[num - min]++
    };

    const res = [];

    for (let i = 0; i < countArray.length; ++i) {
        while (countArray[i] > 0) {
            res.push(i + min);
            countArray[i]--;
        }
    }

    return res;
}

const nums = [2, 3, 2, 1, 1, 4, 5, 6, 7, 8, 8, 8, 9, 8, 9,];

console.log(countingSort(nums));

/**
 * Time Complexity
 * - Best:    O(n * k)
 * - Average: O(n * k)
 * - Worst:   O(n * k)
 *
 * Space Complexity
 * - O(n + k)   
 */