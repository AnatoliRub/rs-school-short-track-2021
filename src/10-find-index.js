/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let left = 0;
  let right = array.length;
  while ((right - left) > 0) {
    const pivot = Math.floor((right + left) / 2);
    if (array[pivot] === value) {
      return pivot;
    }
    if (array[pivot] < value) {
      left = pivot + 1;
    } else {
      right = pivot;
    }
  }
  return -1;
}

module.exports = findIndex;
