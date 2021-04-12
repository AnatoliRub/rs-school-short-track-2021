/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const template = n.toString().split('').map(((el) => +el));
  const minPos = template.indexOf(Math.min.apply(null, template));
  delete template[minPos];
  return +template.join('');
}

module.exports = deleteDigit;
