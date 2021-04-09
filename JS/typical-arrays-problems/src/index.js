
exports.min = function min (array) {
  if (arguments.length == 0 || array.length == 0) {
    return 0;
  } else {
    return array.reduce( (a, b) => a < b ? a : b );
  }
}

exports.max = function max (array) {
  if (arguments.length == 0 || array.length == 0) {
    return 0;
  } else {
    return array.reduce( (a, b) => a > b ? a : b );
  }
}

exports.avg = function avg (array) {
  if (arguments.length == 0 || array.length == 0) {
    return 0;
  } else {
    return array.reduce( (a, b) => a + b ) / array.length;
  }
}
