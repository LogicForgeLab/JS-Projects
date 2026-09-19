const binarySearch = (arr, target) => {
  const n = arr.length - 1;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target === arr[mid]) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch(arr, 9));
console.log(binarySearch(arr, 1));
console.log(binarySearch(arr, 5));

/**
 * Binary Search
 *
 * Searches for a target value in a sorted array.
 *
 * Time Compexity
 * - Best: O(1)
 * - Avarg: O(log n)
 * - Worst: O(log n)
 *
 * Space Complexity
 * - O(1)
 */
