
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0 || matrix.length === 0) {
    return [];
  }

  let resultArray=[];

  for (let i = 0; i < matrix.length; i++) {
    if ( i % 2 !== 0 ) {
      resultArray = resultArray.concat(matrix[i].reverse());
    } else {
      resultArray = resultArray.concat(matrix[i]);
    }
  }

  return resultArray;
}
