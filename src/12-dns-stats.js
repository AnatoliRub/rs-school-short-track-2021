/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const answer = {};
  domains.forEach((el) => {
    const buf = el.split('.').reverse().map((elem) => `.${elem}`);
    buf.push('addingElem');
    buf.reduce((acc, curr) => {
      answer[acc] = (answer[acc] || 0) + 1;
      return acc + curr;
    });
  });
  return answer;
}

module.exports = getDNSStats;
