/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const temp = str.split('');
  let col = 1;
  let curr = temp[0];
  const answer = [];

  for (let i = 1; i < temp.length; i++) {
    if (temp[i] === curr) {
      col += 1;
    }
    if (temp[i] !== curr) {
      if (col !== 1) {
        answer.push(col);
      }
      answer.push(curr);
      col = 1;
      curr = temp[i];
    }
  }
  if (col !== 1) {
    answer.push(col);
  }
  answer.push(curr);
  return answer.join('');
}

module.exports = encodeLine;
