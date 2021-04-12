/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const seen = {};
  const answer = [];
  names.filter((item) => {
    if (Object.prototype.hasOwnProperty.call(seen, item)) {
      return false;
    }
    seen[item] = 0;
    return seen[item];
  });
  names.forEach((el) => {
    if (seen[el] > 0) {
      answer.push(`${el}(${seen[el]})`);
      if (Object.prototype.hasOwnProperty.call(seen, `${el}(${seen[el]})`)) {
        seen[`${el}(${seen[el]})`] = seen[`${el}(${seen[el]})`] + 1;
      }
    } else {
      answer.push(el);
    }
    seen[el] += 1;
  });
  return answer;
}

module.exports = renameFiles;
