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
  const arr = str.split('');
  let count = 0;
  const tempArr = [];
  let tmpItem;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      tmpItem = arr[i];
    }
    if (arr[i] === tmpItem) {
      count += 1;
    } else {
      if (count === 1) {
        tempArr.push(`${tmpItem}`);
      } else {
        tempArr.push(`${count}${tmpItem}`);
      }
      count = 1;
      tmpItem = arr[i];
    }
    if (i === arr.length - 1) {
      if (count === 1) {
        tempArr.push(`${tmpItem}`);
      } else {
        tempArr.push(`${count}${tmpItem}`);
      }
    }
  }
  return tempArr.join('');
}

module.exports = encodeLine;
