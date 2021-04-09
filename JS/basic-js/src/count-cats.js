const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let catCount = 0;

  for (const item of backyard) {

    for (let i = 0; i < item.length; i++) {

      if ( item[i] === '^^') {
        catCount++;
      }

    }
    
  }
  return catCount;
};
