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
  const map = new Map();
  let tempAddress = '';
  const twoDimStringArray = domains.map((item) => item.split('.').reverse());
  for (let i = 0; i < twoDimStringArray.length; i++) {
    for (let j = 0; j < twoDimStringArray[i].length; j++) {
      const element = twoDimStringArray[i][j];
      tempAddress = `${tempAddress}.${element}`;
      if (map.has(tempAddress)) {
        map.set(tempAddress, map.get(tempAddress) + 1);
      } else {
        map.set(tempAddress, 1);
      }

      if (j === twoDimStringArray[i].length - 1) {
        tempAddress = '';
      }
    }
  }
  return Object.fromEntries(map);
}

module.exports = getDNSStats;
