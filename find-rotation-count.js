// findRotationCount
// Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// findRotationCount([7, 9, 11, 12, 5]) // 4
// findRotationCount([7, 9, 11, 12, 15]) // 0

function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;

  // Perform a binary search to find the index of the smallest element (pivot)
  while (left < right) {
    let middle = Math.floor((left + right) / 2);

    // If the middle element is greater than the right element,
    // the pivot is in the right half of the array
    if (arr[middle] > arr[right]) {
      left = middle + 1;
    } else {
      // If not, the pivot is in the left half of the array (including the middle element)
      right = middle;
    }
  }

  // The index of the smallest element (pivot) corresponds to the number of rotations
  return left;
}


module.exports = findRotationCount