const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  
  if (!Array.isArray(arr)) {
    throw new Error("arr is not Array");
  }

  //Deep copy of array
  //let copyArr = JSON.parse(JSON.stringify(arr));
  let copyArr = arr.slice();
  let newArr = [];

  for (let i = 0; i < copyArr.length; i++) {

    switch (copyArr[i]) {
      case '--discard-next':
        if (typeof(copyArr[i + 1]) !== 'undefined') {
          delete copyArr[i];
          delete copyArr[i + 1];
        } else {
          delete copyArr[i];
        }
        break;

      case '--discard-prev':
        if(typeof(copyArr[i - 1]) !== 'undefined') {
          delete copyArr[i];
          delete copyArr[i - 1];
        } else {
          delete copyArr[i];
        }
        break;

      case '--double-next':
        if (typeof(copyArr[i + 1]) !== 'undefined') {
          copyArr[i] = copyArr[i + 1];
        } else {
          delete copyArr[i];
        }
        break;

      case '--double-prev':
        if(typeof(copyArr[i - 1]) !== 'undefined') {
          copyArr[i] = copyArr[i - 1];
        } else {
          delete copyArr[i];
        }
        break;

    }
  }

  copyArr.forEach(element => {
    
    if ( typeof(element) !== 'undefined') {
      newArr.push(element);
    }

  });

  return newArr;
};
