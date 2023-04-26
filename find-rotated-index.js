// findRotatedIndex
// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

function findRotatedIndex(arr, target) {
  // This helper function finds the index of the pivot (smallest element) in the rotated array
  function findPivot() {
    let left = 0;
    let right = arr.length - 1;

    // Perform a binary search to find the pivot
    while (left < right) {
      let middle = Math.floor((left + right) / 2);

      // If the middle element is greater than the right element, the pivot is in the right half
      if (arr[middle] > arr[right]) {
        left = middle + 1;
      } else {
        // If not, the pivot is in the left half (including the middle element)
        right = middle;
      }
    }

    // Return the pivot index
    return left;
  }

  // This helper function performs a binary search to find the target in the given range
  function binarySearch(left, right) {
    while (left <= right) {
      let middle = Math.floor((left + right) / 2);

      // If the middle element is the target, return the index
      if (arr[middle] === target) {
        return middle;
      } else if (arr[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    // If not found, return -1
    return -1;
  }

  // Find the index of the pivot
  const pivot = findPivot();

  // Determine which half of the rotated array the target is in and perform a binary search in that range
  if (target >= arr[0]) {
    // If the target is greater than or equal to the first element, search in the left half
    return binarySearch(0, pivot - 1);
  } else {
    // If the target is less than the first element, search in the right half
    return binarySearch(pivot, arr.length - 1);
  }
}
  

module.exports = findRotatedIndex