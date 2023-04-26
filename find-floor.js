// findFloor
// Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

// Examples:

// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1
// Constraints

// Time Complexity: O(log N)

function findFloor(arr, x) {
  let left = 0;
  let right = arr.length - 1;
  let floor = -1;

  // Perform a binary search to find the floor of x in the array
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    // If the middle element is equal to x, return it as the floor
    if (arr[middle] === x) {
      return arr[middle];
    } else if (arr[middle] < x) {
      // If the middle element is less than x, update the floor and search in the right half of the array
      floor = arr[middle];
      left = middle + 1;
    } else {
      // If the middle element is greater than x, search in the left half of the array
      right = middle - 1;
    }
  }

  // Return the floor value; if no floor exists, the default value -1 will be returned
  return floor;
}

  

module.exports = findFloor