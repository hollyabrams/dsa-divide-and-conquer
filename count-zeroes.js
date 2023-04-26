// countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0

function countZeroes(arr) {
    // Initialize left and right pointers for binary search
    let left = 0;
    let right = arr.length - 1;

    // Continue the search while the left pointer is less than or equal to the right pointer
    while (left <= right) {
        // Calculate the middle index
        let middle = Math.floor((left + right) / 2);

        // If the middle element is 1, set the left pointer to middle + 1
        if (arr[middle] === 1) {
            left = middle + 1;
        } else {
            // If the middle element is 0 and it's either the first element or the previous element is 1,
            // return the number of zeroes by subtracting the middle index from the length of the array
            if (middle === 0 || arr[middle - 1] === 1) {
                return arr.length - middle;
            } else {
                // If the middle element is 0 but the previous element is also 0, set the right pointer to middle - 1
                right = middle - 1;
            }
        }
    }

    // If the function reaches this point, it means there are no zeroes in the array, so return 0
    return 0;
}


module.exports = countZeroes