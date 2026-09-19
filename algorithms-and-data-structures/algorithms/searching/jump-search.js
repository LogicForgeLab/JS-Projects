const jumpSearch = (arr, target) => {
  const n = arr.length;
  const jump = Math.floor(Math.sqrt(n));

  let left = 0;
  let right = jump;

  while (arr[right - 1] < target) {
    left = right;
    right += jump;
  }

  right = Math.min(right, n);

  for (let i = left; i < right; ++i) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(jumpSearch(arr, 9));
console.log(jumpSearch(arr, 1));
console.log(jumpSearch(arr, 5));

/**
 * Jump Search
 *
 * Searches for a target value in a sorted array
 * by jumping ahead by fixed blocks.
 *
 * Time Complexity:
 * - Best:    O(1)
 * - Average: O(√n)
 * - Worst:   O(√n)
 *
 * Space Complexity:
 * - O(1)
 */
