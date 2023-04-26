// sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// Constraints:

// Time Complexity: O(log N)

// Examples:

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1

function sortedFrequency(arr, target) {
  // This helper function finds the index of the first occurrence of the target in the array
  function findFirstOccurrence() {
    let left = 0;
    let right = arr.length - 1;

    // Perform a binary search
    while (left <= right) {
      let middle = Math.floor((left + right) / 2);

      // If the middle element is the target and it's the first occurrence, return the index
      if (arr[middle] === target) {
        if (middle === 0 || arr[middle - 1] !== target) {
          return middle;
        } else {
          right = middle - 1;
        }
      } else if (arr[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    // If not found, return -1
    return -1;
  }

  // This helper function finds the index of the last occurrence of the target in the array
  function findLastOccurrence() {
    let left = 0;
    let right = arr.length - 1;

    // Perform a binary search
    while (left <= right) {
      let middle = Math.floor((left + right) / 2);

      // If the middle element is the target and it's the last occurrence, return the index
      if (arr[middle] === target) {
        if (middle === arr.length - 1 || arr[middle + 1] !== target) {
          return middle;
        } else {
          left = middle + 1;
        }
      } else if (arr[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    // If not found, return -1
    return -1;
  }

  // Find the indices of the first and last occurrences of the target
  const first = findFirstOccurrence();
  const last = findLastOccurrence();

  // If either index is -1 (meaning the target was not found), return -1
  if (first === -1 || last === -1) {
    return -1;
  }

  // Calculate and return the frequency by subtracting the first index from the last index and adding 1
  return last - first + 1;
}


module.exports = sortedFrequency