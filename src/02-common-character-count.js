/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const a = s1.split('').sort();
  const b = s2.split('').sort();
  const c = a.reduce((acc, elem) => {
    for (let i = 0; i < b.length; i++) {
      if (b[i] === elem) {
        b.shift();
        return acc + 1;
      }
      if (b[i].charCodeAt() < elem.charCodeAt()) {
        b.shift();
      }
    }
    return acc;
  }, 0);
  return c;
}

module.exports = getCommonCharacterCount;
