/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sub = arr;
  const arrs = arr.filter((el) => el !== -1);
  for (let i = 0; i < arrs.length; i++) {
    let j = i;
    while (j > 0 && arrs[j] < arrs[j - 1]) {
      const buf = arrs[j];
      arrs[j] = arrs[j - 1];
      arrs[j - 1] = buf;
      j--;
    }
  }
  for (let i = 0; i < sub.length; i++) {
    if (sub[i] !== -1) {
      sub[i] = arrs.shift();
    }
  }
  return sub;
}

module.exports = sortByHeight;
