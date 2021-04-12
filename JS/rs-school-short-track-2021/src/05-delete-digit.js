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
  const arr = [];
  const strNumber = String(n);
  for (let i = 0; i < strNumber.length; i++) {
    if (i === 0) {
      arr.push(strNumber.slice(1));
    } else if (i === strNumber.length - 1) {
      arr.push(strNumber.slice(0, strNumber.length - 1));
    } else {
      arr.push(strNumber.slice(0, i) + strNumber.slice(i + 1));
    }
  }
  return Math.max(...arr);
}

module.exports = deleteDigit;
